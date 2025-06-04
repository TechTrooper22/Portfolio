const mongoose = require('mongoose');

// Define schema for Experience items
const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: [String],
    required: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
module.exports = mongoose.model('Experience', ExperienceSchema);