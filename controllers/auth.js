const {
  sendJwtToClient,
  comparePassword,
} = require("../utils/authorization/tokenHelpers");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const CustomError = require("../utils/error/CustomError");
const register = asyncHandler(async (req, res, next) => {
  const user = await new User(req.body);
  user.save();
  sendJwtToClient(user, res);
});
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email }).select("+password");
  console.log(user);
  if (!comparePassword(password, user.password)) {
    return next(CustomError("Please check your email or password", 404));
  }
  sendJwtToClient(user, res);
});
const getUser = (req, res) => {
  res.status(200).send({
    data: req.user,
  });
};
module.exports = {
  register,
  getUser,
  login,
};
