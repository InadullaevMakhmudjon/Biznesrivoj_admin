import axios from '.';

export default {
  getAll: (page, limit) => axios.get(`/api/users/editors?page=${page}&limit=${limit}&createdAt=DESC`),
  get: (id) => axios.get(`/api/users/${id}`),
  update: (user, id) => axios.post(`/api/users/${id}`, user),
  delete: (id) => axios.delete(`/api/users/${id}`),
};
