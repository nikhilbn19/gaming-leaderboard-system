const service = require("../services/leaderboardService");

exports.submitScore = async (req, res) => {
  try {
    const { user_id, score } = req.body;
    await service.submitScoreService(user_id, score);
    res.status(200).json({ message: "Score submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTopPlayers = async (req, res) => {
  try {
    const players = await service.getTopPlayersService();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRank = async (req, res) => {
  try {
    const { user_id } = req.params;
    const rank = await service.getUserRankService(user_id);
    res.status(200).json(rank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
