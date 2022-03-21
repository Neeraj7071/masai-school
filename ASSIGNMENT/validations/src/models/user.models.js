const mongoose = require("mongoose");


// first_name, last_name, email, pincode, age, gender,
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    pincode: { type: Number,min:100000,max:999999 ,required: true },
    age: { type: Number,min:1,max:100, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "Male",
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
