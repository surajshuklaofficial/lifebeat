import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'node:crypto';

import { User } from '../models/index.js';
import sendVerificationMail from '../utils/sendVerificationMail.js';

const createToken = (email) => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    return jwt.sign({email}, jwtSecretKey, {expiresIn: '3d'});
}

const signin = async (req, res) => {

    try {
        const userAuthInfo = req.body;
        let user = await User.findOne({ email: userAuthInfo.email });
        if (!user) {
            return res.status(404).json({message: "User Not Exists!"}); // 409 not found
        }
        const isAuth = bcrypt.compareSync(userAuthInfo.password.toString(), user.password); // return true if matched and false if not

        if (isAuth && user.isVerified) {
            const token = createToken(user.email);
            res.status(200).json({token, userId: user._id, fullName: `${user.firstName} ${user.lastName}`});
        } else {
            res.status(401).send("UNAUTHORIZED");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message}); // only err will be not sent so use err.message to properly send error message to th frontend
    }
    
}

const signup = async (req, res) => {
    const bcryptRounds = 12;
    try {
        let userInfo = req.body;
        let user = await User.findOne({ email: userInfo.email });
        if (user) {
            res.status(409).json({message: "User Already Exists!"}); // 409 conflict error
            return;
        }
        
        userInfo.password = bcrypt.hashSync(req.body.password.toString(), bcryptRounds);
        user = new User({...userInfo, emailToken: crypto.randomBytes(64).toString("hex")});

        // making sure the data is consistent
        user.email = user.email.toLowerCase();
        user.firstName = user.firstName.toLowerCase();
        user.lastName = user.lastName.toLowerCase();
        
        userInfo = await user.save();
        
        sendVerificationMail(userInfo);
        
        res.status(200).json({message: `Verification Email is sent on: ${user.email}. Please Verify!`});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const verifyEmail = async (req, res) => {
    try {
        const emailToken = req.body.emailToken;

        if (!emailToken) return res.status(400).json({message: "EmailToken is not found..."});

        const user = await User.findOne({emailToken});
        
        if (user) {
            user.emailToken = null;
            user.isVerified = true;

            await user.save();

            const token = createToken(user.email);

            res.status(200).json({userId: user._id, fullName: `${user.firstName} ${user.lastName}`, token, isVerified: user?.isVerified})
        } else {
            res.status(404).json({message: "Email verification failed, invalid token!"});
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}
export { signin, signup, verifyEmail };