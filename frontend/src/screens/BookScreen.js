import { MDBBtn, MDBCardHeader, MDBContainer } from "mdb-react-ui-kit";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "../components/Stripe";

const BookScreen = ({ match, history }) => {
  const tourId = match.params.id;
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEYS);
  return (
    <MDBContainer style={{ marginTop: "110px", height: "100vh" }}>
      <MDBBtn href={`/tours/${tourId}`}>back</MDBBtn>
      <MDBCardHeader className="text-center mb-5" id="tour-header">
        PAYMENT
      </MDBCardHeader>
      <Elements stripe={stripePromise}>
        <Stripe tourId={tourId} />
      </Elements>
    </MDBContainer>
  );
};

export default BookScreen;
