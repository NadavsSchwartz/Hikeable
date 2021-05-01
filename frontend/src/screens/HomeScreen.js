import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div className="intro">
        <div
          className="mask"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center h-100"
          >
            <MDBRow className="d-flex justify-content-center text-center">
              <MDBCol>
                <h2 className="display-2 font-weight-bold text-white pt-4 mb-2">
                  Hikeable
                </h2>

                <hr className="text-white" />

                <h4 className="text-white my-5">
                  OUTDOORS IS WHERE LIFE HAPPENS
                </h4>
                <MDBBtn
                  outline
                  href="#discover-more"
                  className="btn-outline-white "
                >
                  Discover more
                  <i className="fa fa-book ms-2"></i>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
      <MDBContainer>
        <p className="text-black">asda</p>
        <MDBBtn>as</MDBBtn>
      </MDBContainer>
    </>
  );
};

export default HomeScreen;
