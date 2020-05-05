import axios from '.';

export default {
  upload: (file) => axios.post('/api/files', file, { 'Content-Type': 'multipart/form-data' }),
};
