import { MDBBtn, MDBCardHeader, MDBContainer } from "mdb-react-ui-kit";

import React from "react";

const BookScreen = ({ match, history }) => {
  return (
    <MDBContainer style={{ marginTop: "110px", height: "100vh" }}>
      <MDBCardHeader className='text-center mb-5' id='tour-header'>
        PAYMENT
      </MDBCardHeader>
    </MDBContainer>
  );
};

export default BookScreen;
