import types from '../../../constants/error';

const initialState = {
  open: false,
  message: '',
};

const map = {
  [types.HASERROR]: (state, { message }) => ({ ...state, open: true, message }),
  [types.CLOSE]: (state) => ({ ...state, open: false, message: '' }),
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
