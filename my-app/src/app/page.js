// pages/index.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteCard from './components/NoteCard';
import Link from 'next/link';

const Home = () => {
  // Fetch and display book and language data from MongoDB
  const books = []; // Replace with actual data (initialize an empty array for books)
  const languages = []; // Replace with actual data (initialize an empty array for languages)

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mt-8 mb-4">Books</h1>
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <NoteCard key={book._id} title={book.title} link={`/books/${book._id}`} />
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-8 mb-4">Programming Languages</h1>
        <div className="grid grid-cols-3 gap-4">
          {languages.map((language) => (
            <NoteCard key={language._id} title={language.title} link={`/languages/${language._id}`} />
          ))}
        </div>

        {/* Links to the noteform and bookform */}
        <div className="mt-8">
        <Link href="/pages/Diary" >Add Note</Link>


          <Link href="/forms/bookform"  className="text-blue-500 hover:underline">Add Book
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
