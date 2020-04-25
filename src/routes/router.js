import sidbarElements from '../utils/sidebar-elements';
import Article from '../views/articles/Article';

export default [
  {
    path: '/articles/create',
    component: Article,
  },
  {
    path: '/articles/edit/:slug',
    component: Article,
  },
].concat(sidbarElements);
