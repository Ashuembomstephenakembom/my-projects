// Contact routes for handling form submissions
const express = require('express');
const router = express.Router();
const { 
  submitContactForm, 
  getAllContacts, 
  updateContactStatus 
} = require('../controllers/contactController');

// POST route to handle contact form submissions
router.post('/submit', submitContactForm);

// GET route to fetch all contacts (for admin dashboard)
router.get('/all', getAllContacts);

// PATCH route to update contact status
router.patch('/:id/status', updateContactStatus);

module.exports = router;
