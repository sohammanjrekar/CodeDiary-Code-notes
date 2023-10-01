// pages/diary.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DiaryEntry from '../components/DiaryEntry';

const Diary = () => {
  // State to store diary entries
  const [diaryEntries, setDiaryEntries] = useState([]);

  // Fetch diary entries from MongoDB
  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        // Assuming you have an API endpoint to fetch diary entries
        const response = await fetch('/api/diary-entries');
        const data = await response.json();
        setDiaryEntries(data);
      } catch (error) {
        console.error('Error fetching diary entries:', error);
      }
    };

    fetchDiaryEntries();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Diary</h1>
        {/* Display diary entries */}
        {diaryEntries.map((entry) => (
          <DiaryEntry key={entry._id} date={entry.date} content={entry.content} />
        ))}
        {/* Add a form to submit new diary entries */}
        <DiaryEntry />
      </div>
      <Footer />
    </div>
  );
};

export default Diary;
