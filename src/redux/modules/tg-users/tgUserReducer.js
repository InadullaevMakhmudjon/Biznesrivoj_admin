import actionTypes from "../../../constants/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: null,
  user: null,
};

const map = {
  [`${actionTypes.GET_TG_USERS}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${actionTypes.GET_TG_USERS}${actionTypes.REJECTED}`]: (
    state,
    { payload }
  ) => ({ ...state, loading: false, error: payload }),
  [`${actionTypes.GET_TG_USERS}${actionTypes.FULFILLED}`]: (
    state,
    { payload: { data } }
  ) => ({
    ...state,
    loading: false,
    data,
    error: null,
  }),
  [`${actionTypes.GET_TG_SINGLE_USER}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${actionTypes.GET_TG_SINGLE_USER}${actionTypes.REJECTED}`]: (
    state,
    { payload }
  ) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [`${actionTypes.GET_TG_SINGLE_USER}${actionTypes.FULFILLED}`]: (
    state,
    { payload }
  ) => ({
    ...state,
    loading: false,
    user: payload.data,
  }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) =>
  (map[action.type] && map[action.type](state, action)) || state;
