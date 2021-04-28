import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
const LoginScreen = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="7">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="email" className="grey-text">
              Your email
            </label>
            <input type="email" id="email" className="form-control" />
            <br />
            <label htmlFor="password" className="grey-text">
              Your password
            </label>
            <input type="password" id="password" className="form-control" />
            <div className="text-center mt-4">
              <MDBBtn color="white" type="submit">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginScreen;
