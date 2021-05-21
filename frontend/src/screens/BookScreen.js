import { MDBCardHeader, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "../components/Stripe";

const BookScreen = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <MDBContainer>
      <MDBCardHeader className="text-center mb-5" id="tour-header">
        LEAVE A REVIEW
      </MDBCardHeader>
      <Elements stripe={stripePromise}>
        <Stripe />
      </Elements>
    </MDBContainer>
  );
};

export default BookScreen;
