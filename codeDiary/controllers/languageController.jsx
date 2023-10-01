// languageController.js
const Language = require('../models/Language');

// Example controller functions
const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other CRUD operations...

module.exports = {
  getAllLanguages,
  // Export other functions as needed...
};
