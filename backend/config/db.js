
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected:', process.env.MONGO_URI);
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
