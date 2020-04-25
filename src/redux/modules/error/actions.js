import types from '../../../constants/error';

export const listen = () => (dispatch, _, { axios }) => {
  axios.interceptors.response.use(null, (error) => {
    if (error.response) {
      dispatch({ type: types.HASERROR, message: error.response.data.message || error.message });
    } else {
      dispatch({ type: types.HASERROR, message: error.message });
    }
    return Promise.reject(error);
  });
};

export const close = () => ({
  type: types.CLOSE,
});

export default '';
