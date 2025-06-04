const express = require('express');
const About = require('../models/About');
const router = express.Router();

// GET - Retrieve about section data
router.get('/', async (req, res) => {
  try {
    // Find the about data (assuming there's only one document)
    const aboutData = await About.findOne().sort({ updatedAt: -1 });
    
    if (!aboutData) {
      return res.status(404).json({ message: 'About data not found' });
    }
    
    res.json(aboutData);
  } catch (error) {
    console.error('Error fetching about data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST - Create or update about section data
router.post('/', async (req, res) => {
  try {
    const { bio, skills, imageUrl } = req.body;
    
    // Validate required fields
    if (!bio || !skills || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create new about document
    const newAbout = new About({
      bio,
      skills,
      imageUrl,
      updatedAt: Date.now()
    });
    
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    console.error('Error creating about data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;