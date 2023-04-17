const sendJwtToClient = (user, res) => {
  const token = user.generateJWT();
  res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 10 * 1000),
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

module.exports = sendJwtToClient;
