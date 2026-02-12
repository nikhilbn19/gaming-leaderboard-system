import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userId, setUserId] = useState("");
  const [rank, setRank] = useState(null);

  const fetchLeaderboard = async () => {
    const res = await axios.get("http://localhost:8000/api/leaderboard/top");
    setLeaderboard(res.data);
  };

  const fetchRank = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/leaderboard/rank/${userId}`,
    );
    setRank(res.data);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Gaming Leaderboard</h1>

      <h2>Top Players</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((player, index) => (
            <tr key={index}>
              <td>{player.user_id}</td>
              <td>{player.total_score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Check Your Rank</h2>
      <input
        placeholder="Enter user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchRank}>Get Rank</button>

      {rank && <h3>Your Rank: {rank.rank}</h3>}
    </div>
  );
}

export default App;
