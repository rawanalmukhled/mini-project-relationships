const Movie = require("../../models/Movies");
const Review = require("../../models/Reviews");

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.getReviewsForMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movie: movieId });
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json("Movie not found!");

    req.body.movie = movie._id;
    const review = await Review.create(req.body);

    movie.reviews.push(review);
    await movie.save();

    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};
