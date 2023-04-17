const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});
UserSchema.methods.generateJWT = function () {
  const payload = {
    name: this.name,
    id: this._id,
  };
  const token = jwt.sign(payload, "salam123", {
    expiresIn: "10s",
  });
  return token;
};
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});
module.exports = mongoose.model("User", UserSchema);
