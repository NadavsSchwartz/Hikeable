import axios from "axios";
import {
  GET_TOP_TOURS_FAIL,
  GET_TOP_TOURS_REQUEST,
  GET_TOP_TOURS_SUCCESS,
  GET_TOURS_SUCCESS,
  GET_TOURS_REQUEST,
  GET_TOURS_FAIL,
  GET_TOUR_DETAILS_FAIL,
  GET_TOUR_DETAILS_SUCCESS,
  GET_TOURS_DETAILS_REQUEST,
  TOUR_CREATE_REVIEW_REQUEST,
} from "../constants/tourConstants";

export const getTopTours = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_TOURS_REQUEST });

    const {
      data: {
        data: { data },
      },
    } = await axios.get(`http://localhost:3000/api/v1/tours/top-5-cheap`);

    dispatch({ type: GET_TOP_TOURS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOP_TOURS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTours = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOURS_REQUEST });

    const {
      data: {
        data: { data },
      },
    } = await axios.get(`http://localhost:3000/api/v1/tours`);

    dispatch({ type: GET_TOURS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOURS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTourDetails = (tourId) => async (dispatch) => {
  try {
    dispatch({ type: GET_TOURS_DETAILS_REQUEST });

    const {
      data: {
        data: { data },
      },
    } = await axios.get(`http://localhost:3000/api/v1/tours/${tourId}`);

    dispatch({ type: GET_TOUR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOUR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tourReviewCreate = (tourId, review) => async (dispatch) => {
  try {
    dispatch({ type: TOUR_CREATE_REVIEW_REQUEST });

    const userInfo = localStorage.getItem("userInfo");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`http://localhost:3000/api/v1/reviews`, review, config);
  } catch (error) {}
};
