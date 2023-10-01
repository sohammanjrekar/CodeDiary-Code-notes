// languages.js
const express = require('express');
const router = express.Router();
const languageController = require('../../controllers/languageController');

// Routes for languages
router.get('/', languageController.getAllLanguages);
// Add routes for other CRUD operations...

module.exports = router;
