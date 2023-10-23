import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    date: { type: Date, required: true, default: new Date()},
    dob: { type: Date },
    age: Number,
    weight: String,
    height: String,
    bloodGroup: String,
    allergies: [String], // An array of allergies
    medications: [String], // An array of current medications
    medicalConditions: [String], // An array of chronic medical conditions
    surgeries: [String], // An array of past surgeries
    immunizations: [String], // An array of immunizations received
    familyMedicalHistory: String, // Information about family medical history
    diagnosis: String,
    treatments: [String], // An array of treatment options
    additionalNotes: String,
});


const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: String,
    email: {
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function (v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
        }},
    password: {type: String, required: true},
    contactInfo: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);
const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

export { User, MedicalRecord };