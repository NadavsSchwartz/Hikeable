import { MDBBtn, MDBCardHeader, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "../components/Stripe";

const BookScreen = ({ match, history }) => {
  const tourId = match.params.id;
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <MDBContainer style={{ marginTop: "90px" }}>
      <MDBBtn href={`/tours/${tourId}`}>back</MDBBtn>
      <MDBCardHeader className="text-center mb-5" id="tour-header">
        PAYMENT
      </MDBCardHeader>
      <Elements stripe={stripePromise}>
        <Stripe />
      </Elements>
    </MDBContainer>
  );
};

export default BookScreen;
