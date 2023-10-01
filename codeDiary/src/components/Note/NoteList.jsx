import React, { useState, useEffect } from 'react';
import NoteService from '../../services/NoteService';
import NoteCard from './NoteCard';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes when the component mounts
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      // Get the list of notes using NoteService
      const response = await NoteService.getNotes();

      // Update the state with the fetched notes
      setNotes(response.data);
    } catch (error) {
      // Handle error
      console.error('Error fetching notes:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
