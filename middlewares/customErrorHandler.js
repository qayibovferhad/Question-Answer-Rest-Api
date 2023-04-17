const customErrorHandler = (req, res, next) => {
  console.log(err);
  res.status(200).send({
    success: false,
    message: err,
  });
};
module.exports = customErrorHandler;
