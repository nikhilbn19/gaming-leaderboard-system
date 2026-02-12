const axios = require("axios");

const API_BASE = "http://localhost:8000/api/leaderboard";

async function submitScore() {
  const user_id = Math.floor(Math.random() * 10000) + 1;
  const score = Math.floor(Math.random() * 1000) + 100;

  await axios.post(`${API_BASE}/submit`, {
    user_id,
    score,
  });
}

async function getTopPlayers() {
  await axios.get(`${API_BASE}/top`);
}

async function getUserRank() {
  const user_id = Math.floor(Math.random() * 10000) + 1;
  await axios.get(`${API_BASE}/rank/${user_id}`);
}

async function runLoadTest() {
  while (true) {
    await submitScore();
    await getTopPlayers();
    await getUserRank();
    await new Promise((r) => setTimeout(r, 500));
  }
}

runLoadTest();
