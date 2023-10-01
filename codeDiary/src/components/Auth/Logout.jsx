import React from 'react';
import AuthService from '../../services/AuthService';

const Logout = () => {
  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Call AuthService to perform logout
      const response = await AuthService.logout();

      // Handle successful logout (you might want to redirect the user)
      console.log('Logout Successful', response.data);
    } catch (error) {
      // Handle logout error
      console.error('Logout Error', error.response.data);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
