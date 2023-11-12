import express from "express";

import DailyActivity from "../models/dailyActivity.js";
const router = express.Router();

// Create a new daily activity
const createOrUpdateDailyActivity = async (req, res) => {
  try {
    const userId = req.params.id;

    const todayDateStart = new Date();
    const todayDateEnd = new Date();
    todayDateStart.setHours(0, 0, 0);
    todayDateEnd.setHours(23, 59, 59);

    const options = {
      new: true, // Return the modified document rather than the original
      upsert: true, // Create a new document if no match is found
    };

    let dailyActivity = await DailyActivity.findOneAndUpdate({user: userId, createdAt: { $gt: todayDateStart, $lt: todayDateEnd }}, 
    {...req.body, user: userId}, options);

    if (dailyActivity) {
    } else {
      dailyActivity = new DailyActivity({ ...req.body, user: userId });
      await dailyActivity.save();
    }

    res.status(201).json(dailyActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get today daily activity
const fetchTodayActivity = async (req, res) => {
  try {
    const userId = req.params.id;

    const todayDateStart = new Date();
    const todayDateEnd = new Date();
    todayDateStart.setHours(0, 0, 0);
    todayDateEnd.setHours(23, 59, 59);

    const dailyActivity = await DailyActivity.findOne({
      user: userId,
      createdAt: { $gt: todayDateStart, $lt: todayDateEnd },
    });

    res.status(200).json(dailyActivity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a daily activity by ID
router.delete("/:id", async (req, res) => {
  try {
    const dailyActivity = await DailyActivity.findByIdAndDelete(req.params.id);
    if (!dailyActivity) {
      return res.status(404).json({ error: "Daily activity not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { createOrUpdateDailyActivity, fetchTodayActivity };
