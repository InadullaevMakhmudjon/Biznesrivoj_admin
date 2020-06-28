import axios from "axios";
import { API_URL } from "../../../config/appConfig";
import actionTypes from "../../../constants/actionTypes";

import { getHeaders } from "../../../utils";

export const getAllTGUsers = () => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_USERS,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/users`,
        headers: getHeaders(getState),
      }),
    });
  }
};

export const getSingleTGUser = (userId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_SINGLE_USER,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/users/${userId}`,
        headers: getHeaders(getState),
      }),
    });
  }
};
