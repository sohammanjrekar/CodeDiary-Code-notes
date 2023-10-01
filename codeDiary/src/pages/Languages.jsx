// Languages.js
import React from 'react';
import LanguageCard from '../components/LanguageCard';

const Languages = () => {
  // Example language data
  const languages = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    // Add more languages as needed
  ];

  return (
    <div>
      <h2>Languages</h2>
      {languages.map((language) => (
        <LanguageCard key={language.id} language={language} />
      ))}
    </div>
  );
};

export default Languages;
