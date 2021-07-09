import axios from "axios";
import { browserHistory } from "react-router";
import {
  BOOKING_PAYMENT_FAIL,
  BOOKING_PAYMENT_REQUEST,
  BOOKING_PAYMENT_SUCCESS,
} from "../constants/bookingConstants";

export const tourBooking = (tourId) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_PAYMENT_REQUEST });

    const userInfo = localStorage.getItem("userInfo");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        "Access-Control-Allow-Origin": "http://localhost:3001",
        "Access-Control-Allow-Credentials": "true",
      },
    };

    const {
      data: { data },
    } = await axios.post(
      `http://localhost:3000/api/v1/booking/checkout-session/${tourId}`,
      null,
      config
    );
    dispatch({ type: BOOKING_PAYMENT_SUCCESS, payload: data });
    document.location.href = `${data.session.url}`;
  } catch (error) {
    dispatch({
      type: BOOKING_PAYMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
