// books.js
const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController');

// Routes for books
router.get('/', bookController.getAllBooks);
// Add routes for other CRUD operations...

module.exports = router;
