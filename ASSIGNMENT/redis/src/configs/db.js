const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
      "mongodb+srv://neeraj:khajuriya1234@cluster0.vo7j0.mongodb.net/myoauthDatabase?retryWrites=true&w=majority"
    );
  };
  