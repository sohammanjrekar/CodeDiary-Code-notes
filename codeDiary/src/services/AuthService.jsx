// AuthService.js
import axios from 'axios';

const AuthService = {
  register: async (username, password) => {
    try {
      const response = await axios.post('/api/auth/register', { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  login: async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default AuthService;
