const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController.js");

router.route("/").get(gameController.getAllGames);
router.route("/:id").get(gameController.getGameById);
router.route("/genres").get(gameController.getGenres);

module.exports = router;
