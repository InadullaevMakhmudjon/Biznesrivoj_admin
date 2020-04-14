import types from '../../../constants/auth';
import status from '../../../constants/promises';

const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
};

const map = {
  [`${types.LOGIN}${status.PENDING}`]: (state) => ({ ...state, loading: true }),
  [`${types.LOGIN}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.LOGIN}${status.FULFILLED}`]: (state, { payload: { data } }) => {
    localStorage.setItem('token', data.token);
    return { ...state, loading: false, token: data.token };
  },
  [`${types.DETAILS}${status.PENDING}`]: (state) => ({ ...state, loading: true }),
  [`${types.DETAILS}${status.REJECTED}`]: () => (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.DETAILS}${status.FULFILLED}`]: (state, { payload: { data } }) => {
    localStorage.setItem('user', JSON.stringify(data.user));
    return { ...state, loading: false, user: data.user };
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { ...state, token: null, user: null };
  },
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
