const pool = require("../config/db");

exports.insertGameSession = async (user_id, score) => {
  const query = `
    INSERT INTO game_sessions (user_id, score, game_mode)
    VALUES ($1, $2, 'solo')
    RETURNING *;
  `;
  return pool.query(query, [user_id, score]);
};

exports.updateLeaderboard = async (user_id) => {
  const query = `
    INSERT INTO leaderboard (user_id, total_score, rank)
    VALUES (
      $1,
      (SELECT SUM(score) FROM game_sessions WHERE user_id = $1),
      0
    )
    ON CONFLICT (user_id)
    DO UPDATE SET total_score =
      (SELECT SUM(score) FROM game_sessions WHERE user_id = $1);
  `;
  return pool.query(query, [user_id]);
};

exports.getTopPlayers = async () => {
  const query = `
    SELECT user_id, total_score
    FROM leaderboard
    ORDER BY total_score DESC
    LIMIT 10;
  `;
  return pool.query(query);
};

exports.getUserRank = async (user_id) => {
  const query = `
    SELECT rank FROM (
      SELECT user_id,
      RANK() OVER (ORDER BY total_score DESC) as rank
      FROM leaderboard
    ) ranked
    WHERE user_id = $1;
  `;
  return pool.query(query, [user_id]);
};
