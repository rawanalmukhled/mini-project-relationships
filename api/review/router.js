const express = require("express");
const {
  getAllReviews,
  getReviewsForMovie,
  createReview,
} = require("../review/controller");
const router = express.Router();

router.get("/", getAllReviews);
router.get("/:movieId", getReviewsForMovie);
router.post("/:movieId", createReview);
module.exports = router;
