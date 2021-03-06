import actionTypes from "../../../constants/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const map = {
  [`${actionTypes.GET_TG_SINGLE_BOOK}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${actionTypes.GET_TG_SINGLE_BOOK}${actionTypes.REJECTED}`]: (
    state,
    { payload },
  ) => ({ ...state, loading: false, error: payload }),
  [`${actionTypes.GET_TG_SINGLE_BOOK}${actionTypes.FULFILLED}`]: (
    state,
    { payload: { data } },
  ) => ({
    ...state,
    loading: false,
    data,
    error: null,
  }),
  [`${actionTypes.UPDATE_TG_BOOK}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${actionTypes.UPDATE_TG_BOOK}${actionTypes.FULFILLED}`]: (state) => ({
    ...state,
    loading: false,
  }),
  [`${actionTypes.CREATE_TG_BOOK}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${actionTypes.CREATE_TG_BOOK}${actionTypes.FULFILLED}`]: (state) => ({
    ...state,
    loading: false,
  }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
