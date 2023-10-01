import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      {/* Add other details about the book as needed */}
    </div>
  );
};

export default BookCard;
