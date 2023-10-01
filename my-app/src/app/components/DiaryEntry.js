// components/DiaryEntry.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DiaryEntry = ({ date, content }) => {
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      date: date || new Date(),
      content: content || '',
    },
    validationSchema: Yup.object({
      content: Yup.string().required('Content is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Send data to the server (replace with your actual API endpoint)
        const response = await fetch('/api/diary-entries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Diary entry submitted successfully!');
          // Update state or perform other actions if needed
        } else {
          console.error('Failed to submit diary entry to the server.');
        }
      } catch (error) {
        console.error('Error submitting diary entry:', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Date picker for selecting the entry date */}
      <DatePicker selected={formik.values.date} onChange={(date) => formik.setFieldValue('date', date)} />

      {/* Textarea for entering the diary content */}
      <textarea
        name="content"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-2 mt-2 w-full"
        placeholder="Enter your diary entry..."
      />

      {/* Display validation error if present */}
      {formik.touched.content && formik.errors.content ? (
        <div className="text-red-500">{formik.errors.content}</div>
      ) : null}

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </form>
  );
};

export default DiaryEntry;
