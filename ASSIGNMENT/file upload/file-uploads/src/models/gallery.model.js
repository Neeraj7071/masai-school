const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userid:{type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,},
    profilePics: [{ type: String, required: false }],

  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("gallery", gallerySchema);