const express = require('express');
const router = express.Router();

// POST - Handle contact form submissions
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    
    // In a real app, you would:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Maybe add to a CRM system
    
    // For this example, we'll just return success
    console.log('Contact form submission:', { name, email, message });
    
    // Simulate async processing
    setTimeout(() => {
      res.status(200).json({ 
        success: true,
        message: 'Your message has been received. Thank you for contacting us!' 
      });
    }, 500);
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;