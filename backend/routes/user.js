import express from 'express';

import { fetchMedicalRecord, createMedicalRecord, updateMedicalRecord, requestAppointment, fetchAppointmentsbyUser, deleteAppointment, fetchPrescriptionHistory } from '../controllers/user.js';
import { createOrUpdateDailyActivity, fetchTodayActivity } from '../controllers/dailyActivities.js'; 
import { fetchTodayScore, fetchWeeklyLeaderboard } from '../controllers/gamification.js';
import chat from '../controllers/chat.js';
import authenticate from '../middleware/authentication.js';

const router = express.Router();

router
  .get('medical-record', authenticate, fetchMedicalRecord)
  .post('medical-record', authenticate, createMedicalRecord)
  .patch('medical-record', authenticate, updateMedicalRecord)
  .post('request-appointment/:doctorId', authenticate, requestAppointment)
  .get('appointments', authenticate, fetchAppointmentsbyUser)
  .delete('appointments/:appointmentId', authenticate, deleteAppointment)
  .get('prescription-history', authenticate, fetchPrescriptionHistory)
  .post('chat', authenticate, chat)
  
  .patch('/:id/create-or-update-today-activity', createOrUpdateDailyActivity)
  .get('/:id/fetch-today-activity', fetchTodayActivity)
  // .get('fetch-all-activities', fetchAllActivities)


  .get('/:id/fetch-today-score', fetchTodayScore)
  .get('/:id/fetch-weekly-leaderboard', fetchWeeklyLeaderboard);
;

export default router;