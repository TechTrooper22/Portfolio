const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// GET - Retrieve all projects (sorted by order)
router.get('/', async (req, res) => {
  try {
    // Option to filter featured projects only
    const featured = req.query.featured === 'true';
    
    // Build query
    const query = featured ? { featured: true } : {};
    
    const projects = await Project.find(query).sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET - Retrieve a single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST - Create a new project
router.post('/', async (req, res) => {
  try {
    const { title, description, technologies, github, external, image, featured, order } = req.body;
    
    // Validate required fields
    if (!title || !description || !technologies || !github || !external || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create new project
    const newProject = new Project({
      title,
      description,
      technologies,
      github,
      external,
      image,
      featured: featured || false,
      order: order || 0
    });
    
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT - Update a project
router.put('/:id', async (req, res) => {
  try {
    const { title, description, technologies, github, external, image, featured, order } = req.body;
    
    // Find and update the project
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        technologies,
        github,
        external,
        image,
        featured: featured || false,
        order: order || 0
      },
      { new: true } // Return the updated document
    );
    
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE - Remove a project
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;