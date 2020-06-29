import axios from "axios";
import { API_URL } from "../../../config/appConfig";
import actionTypes from "../../../constants/actionTypes";

import { getHeaders } from "../../../utils";

export const getSingleGift = (giftId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_SINGLE_GIFT,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/gifts/${giftId}`,
        headers: getHeaders(getState),
      }),
    });
  }
};

export const updateGift = (gift, id) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    const response = dispatch({
      type: actionTypes.UPDATE_TG_GIFT,
      payload: axios({
        method: "POST",
        url: `${API_URL}/api/telegram/gifts/${id}`,
        headers: getHeaders(getState),
        data: gift,
      }),
    });

    response.then(() => {
      dispatch({
        type: actionTypes.GET_TG_SINGLE_GIFT,
        payload: axios({
          method: "GET",
          url: `${API_URL}/api/telegram/gifts/${id}`,
          headers: getHeaders(getState),
        }),
      });
    });
  }
};


export const createTGGift = (gift, history) => (dispatch, getState) => {
  const { token } = getState().auth;

  if (token) {
    const response = dispatch({
      type: actionTypes.CREATE_TG_BOOK,
      payload: axios({
        method: "POST",
        url: `${API_URL}/api/telegram/gifts`,
        headers: getHeaders(getState),
        data: gift,
      }),
    });

    response.then(() => {
      history.push('/telegram-gifts');
    });
  }
};
