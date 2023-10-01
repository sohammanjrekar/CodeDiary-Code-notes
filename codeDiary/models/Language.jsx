// Language.js
const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add other fields as needed...
});

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
