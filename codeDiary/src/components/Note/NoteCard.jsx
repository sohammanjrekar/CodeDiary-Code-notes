import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const NoteCard = ({ note }) => {
  // Use Prism to highlight code syntax
  Prism.highlightAll();

  return (
    <div>
      <h3>{note.language}</h3>
      <pre className={`language-${note.language}`}>
        <code className={`language-${note.language}`}>{note.content}</code>
      </pre>
    </div>
  );
};

export default NoteCard;
