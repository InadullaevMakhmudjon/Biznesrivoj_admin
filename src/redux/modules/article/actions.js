import types from '../../../constants/articles';

export const getAll = (page, limit) => (dispatch, _, { Articles }) => {
  dispatch({
    type: types.GETALL,
    payload: Articles.getAll(page, limit),
  });
};

export const get = (slug) => (dispatch, _, { Articles }) => {
  dispatch({
    type: types.GET,
    payload: Articles.get(slug),
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

export default '';
