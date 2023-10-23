import express from 'express';

import { fetchMedicalRecord, createMedicalRecord, updateMedicalRecord, requestAppointment, fetchAppointmentsbyUser, deleteAppointment, fetchPrescriptionHistory } from '../controllers/user.js';
import chat from '../controllers/chat.js';
import authenticate from '../middleware/authentication.js';

const router = express.Router();

router
  .get('/:id/medical-record', authenticate, fetchMedicalRecord)
  .post('/:id/medical-record', authenticate, createMedicalRecord)
  .patch('/:id/medical-record', authenticate, updateMedicalRecord)
  .post('/:id/request-appointment/:doctorId', authenticate, requestAppointment)
  .get('/:id/appointments', authenticate, fetchAppointmentsbyUser)
  .delete('/:id/appointments/:appointmentId', authenticate, deleteAppointment)
  .get('/:id/prescription-history', authenticate, fetchPrescriptionHistory)
  .post('/:id/chat', authenticate, chat);

export default router;