import DailyActivity from "../models/dailyActivity.js";
import Score from "../models/score.js";

const fetchTodayScore = async (req, res) => {
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

    if (dailyActivity) {
    const options = {
      new: true, // Return the modified document rather than the original
      upsert: true, // Create a new document if no match is found
    };

    const todayScore = await Score.findOneAndUpdate(
      { user: userId, date: { $gt: todayDateStart, $lt: todayDateEnd } },
      { score: dailyActivity?.caloriesBurned?.value * 1.5 },
      options
    );
    res.status(200).json({ score: todayScore.score });
  } else {
    res.status(200).json({score: 0});
  }
    // const score = dailyActivity?.caloriesBurned?.value * 1.5;
    // console.log(todayScore);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error });
  }
};

const fetchWeeklyLeaderboard = async (req, res) => {
    try {
        const lastWeekStartDate = new Date();
        lastWeekStartDate.setDate(lastWeekStartDate.getDate() - 6);

        const result = await Score.aggregate([
            {
                $match: {
                    date: { $gte: lastWeekStartDate, $lte: new Date() },
                },
            },
            {
                $group: {
                    _id: "$user",
                    totalScore: { $sum: "$score" },
                },
            },
            {
                $lookup: {
                    from: "users", // Assuming your User model is named "users"
                    localField: "_id",
                    foreignField: "_id",
                    as: "user",
                },
            },
            {
                $unwind: "$user",
            },
            {
                $project: {
                    _id: 1,
                    totalScore: 1,
                    firstName: "$user.firstName",
                    lastName: "$user.lastName",
                },
            },
            {
                $sort: {
                    totalScore: -1,
                },
            },
            {
                $limit: 5,
            },
        ]);

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


  

export { fetchTodayScore, fetchWeeklyLeaderboard };
