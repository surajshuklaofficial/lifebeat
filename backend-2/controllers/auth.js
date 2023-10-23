import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/index.js';

const signin = async (req, res) => {

    try {
        const userAuthInfo = req.body;
        let user = await User.findOne({ email: userAuthInfo.email });
        if (!user) {
            res.status(409).json({message: "User already exists!"}); // 409 conflict error
            return;
        }
        
        const isAuth = bcrypt.compareSync(userAuthInfo.password.toString(), user.password); // return true if matched and false if not

        if (isAuth) {
            const token = jwt.sign(user.email, process.env.SECRET_KEY);
            res.status(200).json({token, user: {id: user._id, fullName: `${user.firstName} ${user.lastName}`} });
        } else {
            res.status(401).send("UNAUTHORIZED");
        }
    } catch (err) {
        res.status(500).json({message: err.message}); // only err will be not sent so use err.message to properly send error message to th frontend
    }
    
}

const signup = async (req, res) => {
    const bcryptRounds = 12;
    try {
        let userInfo = req.body;
        let user = await User.findOne({ email: userInfo.email });
        if (user) {
            res.status(409).json({message: "User already exists!"}); // 409 conflict error
            // return; // Exit the function
        }
        
        userInfo.password = bcrypt.hashSync(req.body.password.toString(), bcryptRounds);
        user = new User(userInfo);

        // making sure the data is consistent
        user.email = user.email.toLowerCase();
        user.firstName = user.firstName.toLowerCase();
        user.lastName = user.lastName.toLowerCase();
        
        userInfo = await user.save();
        const token = jwt.sign({email : userInfo.email}, process.env.SECRET_KEY);

        res.status(201).json({token, user: {id: user._id, fullName: `${user.firstName} ${user.lastName}`}});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export { signin, signup };