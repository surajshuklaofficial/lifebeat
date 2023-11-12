import mongoose from "mongoose";

const dailyActivitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  caloriesBurned: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: 'kcal', // Default unit for calories burned
    },
  },
  stepsTaken: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: 'steps', // Default unit for steps taken
    },
  },
  distanceWalked: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: 'km', // Default unit for distance walked
    },
  },
  running: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: 'minutes', // Default unit for running
    },
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

const DailyActivity = mongoose.model('DailyActivity', dailyActivitySchema);

export default DailyActivity;