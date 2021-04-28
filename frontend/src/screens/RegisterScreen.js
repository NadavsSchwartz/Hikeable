import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

const FormPage = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="7">
          <form>
            <p className="h4 text-center mb-4">Register</p>
            <label htmlFor="text" className="grey-text">
              Your name
            </label>
            <input type="text" id="name" className="form-control" />
            <br />
            <label htmlFor="email" className="grey-text">
              Your email
            </label>
            <input type="email" id="email" className="form-control" />
            <br />
            <label htmlFor="password" className="grey-text">
              Your password
            </label>
            <input type="password" id="password" className="form-control" />
            <br />

            <label htmlFor="passwordConfirmation" className="grey-text">
              Password Confirmation
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="white" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
