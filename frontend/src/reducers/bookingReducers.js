import { BOOKING_PAYMENT_FAIL, BOOKING_PAYMENT_REQUEST, BOOKING_PAYMENT_SUCCESS } from "../constants/bookingConstants";

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
