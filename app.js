const express = require("express");
const connectDB = require("./database");
const movieRouter = require("./api/movie/router");
const actorRouter = require("./api/actor/router");
const reviewRouter = require("./api/review/router");
const morgan = require("morgan");
const cors = require("cors");
const { notFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/actors", actorRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/movies", movieRouter);

app.use(ErrorHandler);
app.use(notFound);

connectDB();
app.listen(8000, () => {
  console.log("app is running on port: 8000");
});
