const express = require("express");
const cors = require("cors");
const leaderboardRoutes = require("./routes/leaderboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leaderboard", leaderboardRoutes);

module.exports = app;
