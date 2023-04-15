const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const register = asyncHandler(async (req, res, next) => {
  const user = await new User(req.body);
  user.save();
  res.status(201).send({
    message: "success",
  });
});
module.exports = {
  register,
};
