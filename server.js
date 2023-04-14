require("dotenv").config({
  path: "./config/env/config.env",
});
const express = require("express");
const app = express();
const questionRouter = require("./routers/question");
const authRouter = require("./routers/auth");
const connectDatabase = require("./utils/database/connectDatabase");
app.use("/api/v1/question", questionRouter);
app.use("/api/v1/auth", authRouter);
connectDatabase();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listened on ${PORT}`);
});
