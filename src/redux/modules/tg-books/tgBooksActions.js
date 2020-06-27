import axios from 'axios';
import { API_URL } from '../../../config/appConfig';
import actionTypes from '../../../constants/actionTypes';

import { getHeaders } from '../../../utils';

export const getAllTgBooks = () => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_BOOKS,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/api/telegram/books`,
        headers: getHeaders(getState),
      }),
    });
  }
};
