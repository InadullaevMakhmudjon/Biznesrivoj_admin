import axios from '.';

export default {
  getAll: () => axios.get('/api/categories'),
};
