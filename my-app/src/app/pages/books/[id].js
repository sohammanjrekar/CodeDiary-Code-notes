// pages/books/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // State to store book details
  const [bookDetails, setBookDetails] = useState(null);

  // Simulate fetching book details from MongoDB
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Assuming you have an API endpoint to fetch book details
        const response = await fetch(`/api/books/${id}`);
        const data = await response.json();
        setBookDetails(data); // Update state with fetched book details
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Book Details</h1>
        
        {bookDetails ? (
          <div>
            <h2 className="text-xl font-bold">{bookDetails.title}</h2>
            <p>{bookDetails.author}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Loading book details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookDetail;
