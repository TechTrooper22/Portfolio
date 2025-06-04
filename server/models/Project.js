const mongoose = require('mongoose');

// Define schema for Project items
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: [String],
    required: true
  },
  github: {
    type: String,
    required: true
  },
  external: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
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
module.exports = mongoose.model('Project', ProjectSchema);