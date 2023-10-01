// Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // Add other fields as needed...
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
