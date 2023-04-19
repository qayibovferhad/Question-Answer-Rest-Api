const CustomError = require("../../utils/error/CustomError");
const jwt = require("jsonwebtoken");
const {
  isTokenIncluded,
  getAccessToken,
} = require("../../utils/authorization/tokenHelpers");
const getAccessToRoute = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!isTokenIncluded(req)) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }
  const access_token = getAccessToken(req);
  jwt.verify(access_token, "salam123", (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this route", 401)
      );
    }
    req.user = decoded;
    next();
  });
};
module.exports = {
  getAccessToRoute,
};
