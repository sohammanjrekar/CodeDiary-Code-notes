// models/note.js
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  codeSnippet: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
