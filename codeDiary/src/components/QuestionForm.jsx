import React, { useState } from 'react';

const QuestionForm = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionContent, setQuestionContent] = useState('');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    
    // Handle the submission of the question (you may use a service or send it to the server)
    console.log('Question Title:', questionTitle);
    console.log('Question Content:', questionContent);

    // Clear the form after submission
    setQuestionTitle('');
    setQuestionContent('');
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleQuestionSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            rows="4"
            cols="50"
            value={questionContent}
            onChange={(e) => setQuestionContent(e.target.value)}
          />
        </label>
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default QuestionForm;
