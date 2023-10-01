// components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more complex validation logic)
    if (!formData.title || !formData.author) {
      // Handle validation errors
      console.error('Title and Author are required');
      return;
    }

    try {
      // Assuming you have an API endpoint to save the book to MongoDB
      const response = await fetch('/api/save-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Book saved successfully!');
        onSave(); // You might want to refresh or update your UI after saving
        setFormData({
          title: '',
          author: '',
          // Clear other fields as needed
        });
      } else {
        console.error('Failed to save book.');
      }
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for book title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
          className="border p-2 mt-2 w-full"
        />
      </div>

      {/* Input for book author */}
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={handleChange}
          value={formData.author}
          className="border p-2 mt-2 w-full"
        />
      </div>

      {/* Add more fields as needed for other book details */}

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
