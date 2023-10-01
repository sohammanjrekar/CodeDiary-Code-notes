import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import NoteService from '../../services/NoteService';

const NoteForm = () => {
  const [noteContent, setNoteContent] = useState('');
  const [language, setLanguage] = useState('');

  const handleNoteSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the note using NoteService
      const response = await NoteService.createNote({
        content: noteContent,
        language,
      });

      // Handle successful note creation
      console.log('Note created:', response.data);

      // Clear the form after successful submission
      setNoteContent('');
      setLanguage('');
    } catch (error) {
      // Handle error
      console.error('Error creating note:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Create a Note</h2>
      <form onSubmit={handleNoteSubmit}>
        <label>
          Content:
          <textarea
            rows="4"
            cols="50"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </label>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
