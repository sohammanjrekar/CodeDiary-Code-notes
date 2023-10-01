// pages/languages/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LanguageDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // State to store programming language details
  const [languageDetails, setLanguageDetails] = useState(null);

  // Simulate fetching programming language details from MongoDB
  useEffect(() => {
    const fetchLanguageDetails = async () => {
      try {
        // Assuming you have an API endpoint to fetch language details
        const response = await fetch(`/api/languages/${id}`);
        const data = await response.json();
        setLanguageDetails(data); // Update state with fetched language details
      } catch (error) {
        console.error('Error fetching language details:', error);
      }
    };

    if (id) {
      fetchLanguageDetails();
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Language Details</h1>
        
        {languageDetails ? (
          <div>
            <h2 className="text-xl font-bold">{languageDetails.name}</h2>
            <p>{languageDetails.creator}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Loading language details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LanguageDetail;
