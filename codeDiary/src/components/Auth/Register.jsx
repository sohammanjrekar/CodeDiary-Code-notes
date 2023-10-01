import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const Register = () => {
  // State to manage form data
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Call AuthService to perform registration
      const response = await AuthService.register(formData.username, formData.password);

      // Handle successful registration (you might want to redirect the user)
      console.log('Registration Successful', response.data);
    } catch (error) {
      // Handle registration error
      console.error('Registration Error', error.response.data);
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
