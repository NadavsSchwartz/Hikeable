import axios from "axios";
import {
  GET_TOP_TOURS_FAIL,
  GET_TOP_TOURS_REQUEST,
  GET_TOP_TOURS_SUCCESS,
  GET_TOURS_SUCCESS,
  GET_TOURS_REQUEST,
  GET_TOURS_FAIL,
  GET_TOURS_DETAILS_FAIL,
  GET_TOURS_DETAILS_REQUEST,
  GET_TOURS_DETAILS_SUCCESS,
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
      type: GET_TOP_TOURS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
