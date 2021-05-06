import {
  GET_TOP_TOURS_REQUEST,
  GET_TOP_TOURS_SUCCESS,
  GET_TOP_TOURS_FAIL,
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAIL,
  GET_TOUR_DETAILS_REQUEST,
  GET_TOUR_DETAILS_SUCCESS,
  GET_TOUR_DETAILS_FAIL,
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

export const getTourDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOUR_DETAILS_REQUEST:
      return { loading: true };
    case GET_TOUR_DETAILS_SUCCESS:
      return { loading: false, tour: action.payload };
    case GET_TOUR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
