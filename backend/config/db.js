const mongoose = require('mongoose');
require('dotenv').config(); // to read from .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log('DB Error:', err);
    process.exit(1); // Exit process in case of error
  }
};

module.exports = connectDB;
