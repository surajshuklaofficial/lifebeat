import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signin = async (req, res ) => {
    const bcryptRounds = 12;

    try {
        let user = await User.findOne({email: req.body.email});
        if (user) { 
            res.status(409).json({message: "User already exists"});
            return;
        }

        user.password = bcrypt.hashSync(req.body.password, bcryptRounds); // bcryptRounds ?
        const token = jwt.sign(req.body.email, process.env.SECRET_KEY);
        res.status(201).json({token});
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
    
}

export const signup = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return; // Exit the function
        }

        const isAuth = bcrypt.compareSync(req.body.password, user.password);
        if (isAuth) {
            const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
            user.token = token;
            user.save();
            res.status(200).json({ token });
        } else {
            res.sendStatus(401);
        }

    } catch (err) {
        res.sendStatus(500);
    }
}
