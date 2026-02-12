const pool = require("../config/db");
const repo = require("../repositories/leaderboardRepo");
const redisClient = require("../config/redis");

exports.submitScoreService = async (user_id, score) => {
  await repo.insertGameSession(user_id, score);
  await repo.updateLeaderboard(user_id);
};

exports.getTopPlayersService = async () => {
  const result = await repo.getTopPlayers();
  return result.rows;
};

exports.getUserRankService = async (user_id) => {
  const result = await repo.getUserRank(user_id);
  return result.rows[0];
};

exports.submitScoreService = async (user_id, score) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await repo.insertGameSession(user_id, score);
    await repo.updateLeaderboard(user_id);

    await redisClient.del("top_players");
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

exports.getTopPlayersService = async () => {
  const cached = await redisClient.get("top_players");

  if (cached) {
    return JSON.parse(cached);
  }

  const result = await repo.getTopPlayers();

  await redisClient.set("top_players", JSON.stringify(result.rows), {
    EX: 30,
  });

  return result.rows;
};
