// components/NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    language: '',
    code: '',
    content: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    language: '',
    code: '',
    content: '',
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
    if (!formData.title) {
      setErrors((prevErrors) => ({ ...prevErrors, title: 'Title is required' }));
      return;
    }

    if (!formData.language) {
      setErrors((prevErrors) => ({ ...prevErrors, language: 'Language is required' }));
      return;
    }

    if (!formData.content) {
      setErrors((prevErrors) => ({ ...prevErrors, content: 'Content is required' }));
      return;
    }

    try {
      // Assuming you have an API endpoint to save the note to MongoDB
      const response = await fetch('/api/save-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Note saved successfully!');
        onSave(); // You might want to refresh or update your UI after saving
        setFormData({
          title: '',
          language: '',
          code: '',
          content: '',
        });
        setErrors({
          title: '',
          language: '',
          code: '',
          content: '',
        });
      } else {
        console.error('Failed to save note.');
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        {errors.title && <div className="text-red-500">{errors.title}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Language
        </label>
        <input
          type="text"
          id="language"
          name="language"
          onChange={handleChange}
          value={formData.language}
          className="border p-2 mt-2 w-full"
        />
        {errors.language && <div className="text-red-500">{errors.language}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          Code
        </label>
        <textarea
          id="code"
          name="code"
          onChange={handleChange}
          value={formData.code}
          className="border p-2 mt-2 w-full"
        />
        {errors.code && <div className="text-red-500">{errors.code}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={formData.content}
          className="border p-2 mt-2 w-full"
        />
        {errors.content && <div className="text-red-500">{errors.content}</div>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
