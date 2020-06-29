import axios from "axios";
import { API_URL } from "../../../config/appConfig";
import actionTypes from "../../../constants/actionTypes";

import { getHeaders } from "../../../utils";

export const getTGOrderHistory = () => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_ORDER_HISTORY,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/orders`,
        headers: getHeaders(getState),
      }),
    });
  }
};

export const getTGSingleOrder = (orderId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (token) {
    dispatch({
      type: actionTypes.GET_TG_SINGLE_ORDER,
      payload: axios({
        method: "GET",
        url: `${API_URL}/api/telegram/orders/${orderId}`,
        headers: getHeaders(getState),
      }),
    });
  }
};
