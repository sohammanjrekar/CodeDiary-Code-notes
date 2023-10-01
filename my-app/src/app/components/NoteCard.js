// components/NoteCard.js
import React from 'react';
import Link from 'next/link';

const NoteCard = ({ title, link }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <Link href={link} className="text-blue-500">View Details
      </Link>
    </div>
  );
};

export default NoteCard;
