import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call AuthService to perform login
      const response = await AuthService.login(formData.username, formData.password);

      // Handle successful login (you might want to redirect the user)
      console.log('Login Successful', response.data);
    } catch (error) {
      // Handle login error
      console.error('Login Error', error.response.data);
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
