const express = require("express");
const {
  getAllActors,
  createActor,
  addActorToMovie,
} = require("./../actor/controller");
const router = express.Router();

router.get("/", getAllActors);
router.post("/", createActor);
router.put("/:actorId/:movieId", addActorToMovie);

module.exports = router;
