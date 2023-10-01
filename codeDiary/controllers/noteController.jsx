// noteController.js
const Note = require('../models/Note');

// Example controller functions
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createNote = async (req, res) => {
  const { content, language } = req.body;

  try {
    const newNote = new Note({ content, language });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other CRUD operations...

module.exports = {
  getAllNotes,
  createNote,
  // Export other functions as needed...
};
