const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://neeraj:khajuriya1234@cluster0.vo7j0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;
