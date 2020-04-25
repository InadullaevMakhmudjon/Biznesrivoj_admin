import types from '../../../constants/categories';

export const getAll = () => (dispatch, _, { Categories }) => {
  dispatch({
    type: types.GETALL,
    payload: Categories.getAll(),
  });
};

export default '';
