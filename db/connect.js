const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("MongoDB connected successfully");

  return mongoose.connect(uri);
};

module.exports = connectDB;
