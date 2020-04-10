import types from '../../../constants/auth';
import status from '../../../constants/promises';

const initialState = {
  loading: false,
  token: localStorage.getItem('token'),
};

const map = {
  [`${types.LOGIN}${status.PENDING}`]: (state) => ({ ...state, loading: true }),
  [`${types.LOGIN}${status.REJECTED}`]: (state) => ({ ...state, loading: false }),
  [`${types.LOGIN}${status.FULFILLED}`]: (state, { payload: { data } }) => {
    localStorage.setItem('token', data.token);
    return { ...state, loading: true, token: data.token };
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    return { ...state, token: null };
  },
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
