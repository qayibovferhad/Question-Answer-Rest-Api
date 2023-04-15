const customErrorHandler = (req, res, next) => {
  console.log(err);
  res.status(200).send({
    success: false,
  });
};
module.exports = customErrorHandler;
