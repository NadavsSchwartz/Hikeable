import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
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
    <form id="payment-form">
      <CardElement
        id="card-element"
        options={cardStyle}
        // onChange={handleChange}
      />
      {/* disabled={processing || disabled || succeeded} */}
      <button id="submit" onClick={handleSubmit}>
        {/* <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span> */}
      </button>
      {/* Show any error that happens when processing the payment */}
      {/* {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )} */}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
    </form>
  );
};
export default CheckoutForm;
