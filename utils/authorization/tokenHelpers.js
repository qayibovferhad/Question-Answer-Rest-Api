const bcrypt = require("bcryptjs");

const sendJwtToClient = (user, res) => {
  const token = user.generateJWT();
  res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 1000),
    })
    .json({
      success: true,
      access_token: token,
      data: {
        name: user.name,
        email: user.email,
      },
    });
};
const isTokenIncluded = (req, res) => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
  );
};
const getAccessToken = (req) => {
  const authorization = req.headers.authorization;
  const access_token = authorization.split(" ")[1];
  return access_token;
};
const comparePassword = (password, hashedpassword) => {
  return bcrypt.compareSync(password, hashedpassword);
};
module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccessToken,
  comparePassword,
};
