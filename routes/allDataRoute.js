const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers/dataController');

// GET all data (education, skills, services, experience)
router.get('/all-data', getAllData);

module.exports = router;
