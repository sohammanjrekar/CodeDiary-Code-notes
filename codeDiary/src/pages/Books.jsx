import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the Express API
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books'); // Assumes your React app is served from the same domain as your Express API
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Run the effect only once on mount

  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Books;
