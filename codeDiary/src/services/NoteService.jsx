// NoteService.js
import axios from 'axios';

const NoteService = {
  getNotes: async () => {
    try {
      const response = await axios.get('/api/notes');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createNote: async (noteData) => {
    try {
      const response = await axios.post('/api/notes', noteData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  // Add other CRUD operations...
};

export default NoteService;
