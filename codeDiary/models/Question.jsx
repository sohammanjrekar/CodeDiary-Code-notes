// Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Add other fields as needed...
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
