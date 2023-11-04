const express = require("express");
const { getAllMovies, createMovie } = require("../movie/controller");
const router = express.Router();

router.get("/", getAllMovies);
router.post("/", createMovie);

module.exports = router;
