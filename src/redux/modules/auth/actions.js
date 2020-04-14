import types from '../../../constants/auth';

// eslint-disable-next-line import/prefer-default-export
export const login = (payload) => (dispatch, _, { Auth }) => {
  dispatch({
    type: types.LOGIN,
    payload: Auth.login(payload),
  });
};

export const details = () => (dispatch, _, { Auth }) => {
  dispatch({
    type: types.DETAILS,
    payload: Auth.details(),
  });
};

export const logout = () => ({ type: types.LOGOUT });
