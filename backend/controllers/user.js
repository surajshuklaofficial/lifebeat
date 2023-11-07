import { User, MedicalRecord } from '../models/index.js';
import Appointment from '../models/appointment.js';

const fetchMedicalRecord = async (req, res) => {

    try {

        const user_id = req.params.id;
        const medical_record = await MedicalRecord.findOne({user: user_id}); // return null if not found

        if (medical_record !== null) {
            res.status(200).json(medical_record);
        } else {
            const medicalRecord = new MedicalRecord({ ...req.body, user: user_id});
            await medicalRecord.save();
            res.status(201).json({ medicalRecord }); // 201 Created
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({message: err.message});
    }
}

const createMedicalRecord = async (req, res) => {
    try {
        const user_id = req.params.id;
        const user = await User.findOne({ _id: user_id });
        if (!user) {
            res.status(404).json({ message: 'User Not Found' }); // 404 Not Found
            return;
        }

        const medicalRecord = new MedicalRecord({ ...req.body, user: user_id, dob: new Date(req.body.dob) });

        await medicalRecord.save();
        res.status(201).json({ medicalRecord }); // 201 Created

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateMedicalRecord = async (req, res) => {
    const userId = req.params.id;
    
    try {
        const updatedMedicalRecord = await MedicalRecord.findOneAndUpdate(
        {user: userId},
        req.body,
        { new: true } // To return the updated medical record document otherwise return old medical record
        );

        if (!updatedMedicalRecord) {
            return res.status(404).json({ message: 'Medical Record not found' });
        }

        res.status(200).json(updatedMedicalRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating Medical Record' });
    }
};

const requestAppointment = async (req, res) => {
    const {id:userId, doctorId} = req.params;

    try {
        const user = await User.findById(userId);
        const doctor = await Doctor.findById(doctorId);

        if (user !== null || doctor !== null) {
            res.status(404).json({message: "Invalid User or Doctor!"});
            return;
        }

        const appointment = new Appointment({...req.body, doctor: doctorId, user: userId});

        await appointment.save();

        res.status(201).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating appointment' });
    }
}

// not implemented
const updatedAppointment = async (req, res) => {
    const appointmentId = req.params.id;
    const { appointmentDateTime, reason } = req.body; // You can include other fields to update.

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
        appointmentId,
        { appointmentDateTime, reason },
        { new: true } // To return the updated appointment document.
        );

        if (!updatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating appointment' });
    }
}

const fetchAppointmentsbyUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const appointments = await Appointment.find({ user: userId });

        res.send(200).json(appointments);

    } catch (error) {
        res.send(500).json({ message: error.message });
    }
}

const deleteAppointment = async (req, res) => {
    const { id:userId, appointmentId } = req.params;

    try {
        await Appointment.findOneAndRemove({_id: appointmentId, userId});
        res.send(200).json({ message: 'Appointment deleted successfully'});

    } catch (err) {
        res.send(500).json({message: err.message});
    }
}

// to be implemented later
const fetchPrescriptionHistory = (req, res) => {

}

export { fetchMedicalRecord, createMedicalRecord, updateMedicalRecord, requestAppointment, fetchAppointmentsbyUser, deleteAppointment, fetchPrescriptionHistory, updatedAppointment };