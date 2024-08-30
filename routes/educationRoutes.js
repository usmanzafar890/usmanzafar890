const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} = require('../controllers/educationController');

const router = express.Router();

router.route('/')
  .get(getEducations)
  .post(createEducation);

router.route('/:id')
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router;
