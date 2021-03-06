import axios from '.';

export default {
  getAll: (page, limit) => axios.get('/api/articles?createdAt=DESC'),
  get: (slug) => axios.get(`/api/articles/${slug}`),
  create: (article) => axios.post('/api/articles', article),
  update: (article, slug) => axios.post(`/api/articles/${slug}`, article),
  deleteArticle: (slug) => axios.delete(`/api/articles/${slug}`),
};
