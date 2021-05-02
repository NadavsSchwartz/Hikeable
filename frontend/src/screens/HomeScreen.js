import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import AboutSection from "../components/AboutSection";

const HomeScreen = () => {
  return (
    <>
      <div className="intro">
        <div
          className="mask"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            height: "100%",
          }}
        >
          <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center h-100"
          >
            <MDBRow className="d-flex justify-content-center text-center">
              <MDBCol>
                <h2
                  style={{ color: "#dadcda" }}
                  className="display-2 font-weight-bold pt-4 mb-2"
                >
                  Hikeable
                </h2>

                <hr className="text-white" />

                <h4 className=" my-5" style={{ color: "#dadcda" }}>
                  OUTDOORS IS WHERE LIFE HAPPENS
                </h4>
                <MDBBtn rounded href="#discover-more" className="btn-success ">
                  Discover more
                  <i className="fa fa-book ms-2"></i>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
      <AboutSection />
    </>
  );
};

export default HomeScreen;
