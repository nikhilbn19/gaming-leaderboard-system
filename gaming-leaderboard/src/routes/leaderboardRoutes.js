const express = require("express");
const router = express.Router();
const controller = require("../controllers/leaderboardController");

router.post("/submit", controller.submitScore);
router.get("/top", controller.getTopPlayers);
router.get("/rank/:user_id", controller.getUserRank);

module.exports = router;
