import {
  BOOKING_PAYMENT_FAIL,
  BOOKING_PAYMENT_REQUEST,
  BOOKING_PAYMENT_SUCCESS,
  USER_BOOKING_FAIL,
  USER_BOOKING_REQUEST,
  USER_BOOKING_SUCCESS,
} from "../constants/bookingConstants";

export const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_PAYMENT_REQUEST:
      return { loading: true };
    case BOOKING_PAYMENT_SUCCESS:
      return { loading: false, sessionUrl: action.payload };
    case BOOKING_PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUsersBookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BOOKING_REQUEST:
      return { loading: true };
    case USER_BOOKING_SUCCESS:
      return { loading: false, myBookings: action.payload };
    case USER_BOOKING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
