import axios from '.';

export default {
  login: (payload) => axios.post('/api/auth/login', payload),
  details: () => axios.get('/api/auth/details'),
};
