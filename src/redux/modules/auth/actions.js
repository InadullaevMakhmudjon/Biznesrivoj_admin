import Auth from '../../../api/Auth';
import types from '../../../constants/auth';

// eslint-disable-next-line import/prefer-default-export
export const login = (payload) => (dispatch) => {
  dispatch({
    type: types.LOGIN,
    payload: Auth.login(payload),
  });
};

export const logout = () => ({ type: types.LOGOUT });
