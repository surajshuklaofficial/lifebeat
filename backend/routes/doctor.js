import express from "express";

import { acceptAppointment, rejectAppointment, viewPatientMedicalRecord, prescribeMedication, recordPatientDiagnosis, updateAvailability, viewPatientMedicalHistory} from '../controllers/doctor.js';
const router = express.Router();

router
    .post('/:id/appointments/:appointmentId/accept', acceptAppointment)
    .post('/:id/appointments/:appointmentId/reject', rejectAppointment)
    .get('/:id/patient/:patientId/medical-record', viewPatientMedicalRecord)
    .post('/:id/patient/:patientId/prescribe', prescribeMedication)
    .post('/:id/patient/:patientId/diagnose', recordPatientDiagnosis)
    .post('/:id/update-availability', updateAvailability)
    .get('/:id/patient/:patientId/medical-history', viewPatientMedicalHistory);
export default router;