const mongoose = require('mongoose');

// Define schema for About section
const AboutSchema = new mongoose.Schema({
  bio: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
module.exports = mongoose.model('About', AboutSchema);