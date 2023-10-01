// pages/forms/noteform.js
import React from 'react';
import NoteForm from '../../components/NoteForm';

const noteform = () => {
  return (
    <div>
      <h1>Add Note</h1>
      <NoteForm onSave={() => { /* Add logic to handle note form submission */ }} />
    </div>
  );
};

export default noteform;
