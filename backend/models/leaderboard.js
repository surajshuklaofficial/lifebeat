const LeaderboardSchema = new mongoose.Schema({
    type: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true },
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
  });
  
  const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);
  