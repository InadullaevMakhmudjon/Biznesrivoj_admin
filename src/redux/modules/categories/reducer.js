import types from '../../../constants/categories';
import status from '../../../constants/promises';

const initialState = {
  loading: false,
  error: null,
  categories: [],
};

// Continue here, add types.GET

const map = {
  [`${types.GETALL}${status.PENDING}`]: (state) => ({ ...state, loading: true, error: null }),
  [`${types.GETALL}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.GETALL}${status.FULFILLED}`]: (state, { payload }) => ({
    ...state, loading: false, categories: payload.data, error: null,
  }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
