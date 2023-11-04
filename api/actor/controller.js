const Actor = require("../../models/Actors");
const Movie = require("../../models/Movies");

exports.getAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find().populate({
      path: "movies",
      select: "title",
    });
    res.status(200).json(actors);
  } catch (error) {
    next(error);
  }
};

exports.createActor = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.addActorToMovie = async (req, res, next) => {
  try {
    const { actorId, movieId } = req.params;
    const actor = await Actor.findById(actorId);
    const movie = await Movie.findById(movieId);

    if (!actor || !movie)
      return res.status(404).json("Movie or Actor was not found");

    actor.movies.push(movie._id);
    movie.actors.push(actor._id);
    await actor.save();
    await movie.save();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateActor = async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const actor = await Actor.findByIdAndUpdate(actorId, req.body, {
      new: true,
    });
    if (!actor) return res.status(404).json("Actor is not found!");
    else res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.deleteActor = async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const actor = await actor.findById(actorId);
    if (!actor) return res.status(404).json("Actor not found!");
    await actor.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
