const mongoose = require("mongoose");

// Use process.env to store the MongoDB connection URL
const dbURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";

// Connect to the database using a function
async function connectToDatabase() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options can be added here
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database error:", error);
  }
}

// Export the connectToDatabase function for external use
module.exports = connectToDatabase;

