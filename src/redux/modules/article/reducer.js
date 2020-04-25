import types from '../../../constants/articles';
import status from '../../../constants/promises';

const initialState = {
  loading: false,
  error: null,
  total: 0,
  articles: [],
  article: null,
};

const map = {
  [`${types.GETALL}${status.PENDING}`]: (state) => ({ ...state, loading: true, error: null }),
  [`${types.GETALL}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.GETALL}${status.FULFILLED}`]: (state, { payload: { data } }) => ({
    ...state, loading: false, total: data.total, articles: data.data, error: null,
  }),
  [`${types.CREATE}${status.PENDING}`]: (state) => ({ ...state, loading: true, error: null }),
  [`${types.CREATE}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.CREATE}${status.FULFILLED}`]: (state) => ({ ...state, loading: false, error: null }),

  [`${types.UPDATE}${status.PENDING}`]: (state) => ({ ...state, loading: true, error: null }),
  [`${types.UPDATE}${status.REJECTED}`]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [`${types.UPDATE}${status.FULFILLED}`]: (state) => ({ ...state, loading: false, error: null }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
