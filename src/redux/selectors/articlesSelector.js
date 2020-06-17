import { createSelector } from 'reselect';
import moment from 'moment';

export const articlesList = (state) => state.article.articles;

const createFormattedArticle = (item) => ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_kr: item.title_kr,
  description_kr: item.description_kr,
  description_uz: item.description_uz,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  views: item.views,
  categories: item.categories.map((i) => ({
    label: i.name,
  })),
});

export const articlesSelector = createSelector(
  articlesList,
  (list) => list.map(createFormattedArticle),
);


export const articleLoading = (state) => state.article.loading;


export const isLoadingSelector = createSelector(
  articleLoading,
  (loading) => loading,
);
