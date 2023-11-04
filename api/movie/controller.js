const Movie = require("../../models/Movies");

exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
};

exports.createMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

exports.updateMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findByIdAndUpdate(movieId, req.body, {
      new: true,
    });
    if (!movie) return res.status(404).json("Movie is not found!");
    else res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json("Movie not found!");
    await movie.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
