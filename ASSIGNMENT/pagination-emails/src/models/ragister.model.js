const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const adminusermail=["ghjgf@hj.com","vahsghs@s.com","sghfcg@s.com","hdfgf@s.com","ssd@c.com"]

const User= mongoose.model("user", userSchema);


module.exports=[User,adminusermail]