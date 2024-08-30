const express = require('express');
const { getExperiences, createExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const { protect } = require('../middleware/authMiddleware'); // Import the protect middleware

const router = express.Router();

// Apply the protect middleware to routes that require authentication
router.get('/', getExperiences);
router.post('/', createExperience);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

module.exports = router;
