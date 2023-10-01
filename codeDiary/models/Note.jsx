// Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  // Add other fields as needed...
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
