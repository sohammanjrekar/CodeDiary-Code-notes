// pages/forms/bookform.js
import React from 'react';
import BookForm from '../../components/BookForm';

const BookFormPage = () => {
  return (
    <div>
      <h1>Add Book</h1>
      <BookForm onSave={() => { /* Add logic to handle book form submission */ }} />
    </div>
  );
};

export default BookFormPage;
