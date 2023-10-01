// questionController.js
const Question = require('../models/Question');

// Example controller functions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other CRUD operations...

module.exports = {
  getAllQuestions,
  // Export other functions as needed...
};
