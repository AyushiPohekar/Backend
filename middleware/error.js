const Errorhandler = require("../utils/errorhandler");

module.exports = (err, res, req) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  // res.status(err.statusCode).json({
  //     success:false,
  //     error:err
  // })

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
