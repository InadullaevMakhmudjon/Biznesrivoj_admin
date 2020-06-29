import types from '../../../constants/articles';
import ArticleService from '../../../api/Articles';

export const getAll = (page, limit) => (dispatch) => {
  dispatch({
    type: types.GETALL,
    payload: ArticleService.getAll(page, limit),
  });
};

export const get = (slug) => (dispatch) => {
  dispatch({
    type: types.GET,
    payload: ArticleService.get(slug),
  });
};

export const create = (article) => (dispatch, _, { Articles }) => {
  dispatch({
    type: types.CREATE,
    payload: Articles.create(article),
  });
};

export const update = (article, slug) => (dispatch, _, { Articles }) => {
  dispatch({
    type: types.UPDATE,
    payload: Articles.update(article, slug),
  });
};

export const deleteArticle = (slug, history) => (dispatch) => {
  dispatch({
    type: types.DELETE,
    payload: ArticleService.deleteArticle(slug),
  });

  history.push('/articles');
};

export default '';
