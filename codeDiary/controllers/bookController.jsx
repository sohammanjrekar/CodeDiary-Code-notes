// bookController.js
const Book = require('../models/Book');

// Example controller functions
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other CRUD operations...

module.exports = {
  getAllBooks,
  // Export other functions as needed...
};
