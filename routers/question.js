const express = require("express");
const questionController = require("../controllers/question");
const questionRouter = express.Router();

questionRouter.get("/", questionController.getAllQuestions);
module.exports = questionRouter;
