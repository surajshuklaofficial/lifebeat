import mongoose from 'mongoose';

const User = new mongoose.Schema({
    firstName: { type: String, required: true }, 
    lastName: String,
    email: { type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function (v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
        }},
    password: { type: String, required: true, minLength: [8, 'minimum length 8 characters'] },
    token: String
})

export default mongoose.model('User', User);