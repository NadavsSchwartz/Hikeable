import React from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { MDBBtn } from "mdb-react-ui-kit";

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <MDBBtn type="submit" disabled={!stripe}>
        Pay
      </MDBBtn>
    </form>
  );
};
export default Stripe;
