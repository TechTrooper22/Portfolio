const express = require('express');
const Experience = require('../models/Experience');
const router = express.Router();

// GET - Retrieve all experience items (sorted by order)
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1 });
    res.json(experiences);
  } catch (error) {
    console.error('Error fetching experience data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET - Retrieve a single experience item
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST - Create a new experience item
router.post('/', async (req, res) => {
  try {
    const { company, title, range, url, description, order } = req.body;
    
    // Validate required fields
    if (!company || !title || !range || !url || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create new experience
    const newExperience = new Experience({
      company,
      title,
      range,
      url,
      description,
      order: order || 0
    });
    
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    console.error('Error creating experience:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT - Update an experience item
router.put('/:id', async (req, res) => {
  try {
    const { company, title, range, url, description, order } = req.body;
    
    // Find and update the experience
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      {
        company,
        title,
        range,
        url,
        description,
        order: order || 0
      },
      { new: true } // Return the updated document
    );
    
    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.json(updatedExperience);
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE - Remove an experience item
router.delete('/:id', async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    
    if (!deletedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;