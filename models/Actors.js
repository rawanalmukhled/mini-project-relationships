const { Schema, model } = require("mongoose");
const ActorSchema = new Schema({
  name: { type: String, required: true },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});
module.exports = model("Actor", ActorSchema);
