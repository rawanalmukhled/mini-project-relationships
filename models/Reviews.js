const { Schema, model } = require("mongoose");
const ReviewSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});
module.exports = model("Review", ReviewSchema);
