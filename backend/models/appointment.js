import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  appointmentDateTime: {
    type: Date,
    required: true,
  },
  reason: String,
  status: {
    type: String,
    enum: ['scheduled', 'canceled', 'completed'],
    default: 'scheduled',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
