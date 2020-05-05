import types from '../../../constants/users';
import status from '../../../constants/promises';

const initialState = {
  loading: false,
  error: null,
  total: 0,
  users: [],
};

const map = {
  [`${types.GETALL}${status.PENDING}`]: (state) => ({ ...state, loading: true, error: false }),
  [`${types.GETALL}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.GETALL}${status.FULFILLED}`]: (_, { payload: { data } }) => ({
    total: data.total, loading: false, users: data.data, error: null,
  }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
