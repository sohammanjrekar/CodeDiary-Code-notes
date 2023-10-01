// questions.js
const express = require('express');
const router = express.Router();
const questionController = require('../../controllers/questionController');

// Routes for questions
router.get('/', questionController.getAllQuestions);
// Add routes for other CRUD operations...

module.exports = router;
