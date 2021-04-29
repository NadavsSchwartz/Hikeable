import {
  GET_TOP_TOURS_REQUEST,
  GET_TOP_TOURS_SUCCESS,
  GET_TOP_TOURS_FAIL,
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAIL,
} from "../constants/tourConstants";

export const getTopToursReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOP_TOURS_REQUEST:
      return { loading: true };
    case GET_TOP_TOURS_SUCCESS:
      return { loading: false, topTours: action.payload };
    case GET_TOP_TOURS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getToursReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOURS_REQUEST:
      return { loading: true };
    case GET_TOURS_SUCCESS:
      return { loading: false, tours: action.payload };
    case GET_TOURS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};