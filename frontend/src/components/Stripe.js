import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { tourBooking } from "../actions/bookingActions";
import { useDispatch } from "react-redux";
const CheckoutForm = ({ tourId }) => {
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  useEffect(() => {
    // ;
  }, [dispatch, tourId]);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  // const handleChange = async (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(tourBooking(tourId));
  };
  return (
    <form id='payment-form'>
      <CardElement
        id='card-element'
        options={cardStyle}
        // onChange={handleChange}
      />
      {/* disabled={processing || disabled || succeeded} */}
      <span id='submit' onClick={handleSubmit}>
        CONTINUE TO BOOKING
      </span>
    </form>
  );
};
export default CheckoutForm;
