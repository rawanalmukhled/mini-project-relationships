exports.ErrorHandler = (error, req, res, next) => {
  res.status(error.status || 500).json({ msg: error.msg || "Server Error!" });
};
