const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/auth/auth");
authRouter.post("/register", authController.register);
authRouter.get("/profile", getAccessToRoute, authController.getUser);
authRouter.post("/login", authController.login);
module.exports = authRouter;
