import types from '../../../constants/users';

export const getAll = (page, limit) => (dispatch, _, { Users }) => {
  dispatch({
    type: types.GETALL,
    payload: Users.getAll(page, limit),
  });
};

export default '';
