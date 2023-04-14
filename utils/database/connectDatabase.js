const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(console.log("connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDatabase;
