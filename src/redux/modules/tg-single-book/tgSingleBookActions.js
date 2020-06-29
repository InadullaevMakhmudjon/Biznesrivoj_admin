import axios from "axios";
import { API_URL } from "../../../config/appConfig";
import actionTypes from "../../../constants/actionTypes";

import { getHeaders } from "../../../utils";

export const getSingleBook = (bookId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_SINGLE_BOOK,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/books/${bookId}`,
        headers: getHeaders(getState),
      }),
    });
  }
};

export const updateBook = (book, id) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    const response = dispatch({
      type: actionTypes.UPDATE_TG_BOOK,
      payload: axios({
        method: "POST",
        url: `${API_URL}/api/telegram/books/${id}`,
        headers: getHeaders(getState),
        data: book,
      }),
    });

    response.then(() => {
      dispatch({
        type: actionTypes.GET_TG_SINGLE_BOOK,
        payload: axios({
          method: "GET",
          url: `${API_URL}/api/telegram/books/${id}`,
          headers: getHeaders(getState),
        }),
      });
    });
  }
};


export const createTGBook = (book, history) => (dispatch, getState) => {
  const { token } = getState().auth;

  if (token) {
    const response = dispatch({
      type: actionTypes.CREATE_TG_BOOk,
      payload: axios({
        method: "POST",
        url: `${API_URL}/api/telegram/books`,
        headers: getHeaders(getState),
        data: book,
      }),
    });

    response.then(() => {
      history.push('/telegram-books');
    });
  }
};
