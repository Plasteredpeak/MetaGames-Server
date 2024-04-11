const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController.js");

router.route("/").get(gameController.getAllGames);
router.route("/genres").get(gameController.getGenres);
router.route("/:id").get(gameController.getGameById);

module.exports = router;
