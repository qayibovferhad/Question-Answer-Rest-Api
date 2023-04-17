const asyncHandler = require("express-async-handler");
const sendJwtToClient = require("../utils/authorization/sendJwtToClient");
const User = require("../models/User");
const register = asyncHandler(async (req, res, next) => {
  const user = await new User(req.body);
  user.save();
  sendJwtToClient(user, res);
});
module.exports = {
  register,
};
