const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/harsiddhi-jewellers', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
