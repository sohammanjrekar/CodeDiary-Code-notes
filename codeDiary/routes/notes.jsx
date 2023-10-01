// notes.js
const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/noteController');

// Routes for notes
router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
// Add routes for other CRUD operations...

module.exports = router;
