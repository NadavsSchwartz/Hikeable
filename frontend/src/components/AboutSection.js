import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="section-features">
        <div className="section-features__grid">
          <MDBRow>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "300px",
                  minWidth: "350px",
                  maxWidth: "400px",
                  backgroundColor: "#f3f1f1",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <i className="feature-box__icon fas fa-globe-americas"></i>

                  <MDBCardTitle className="mt-4">
                    EXPLORE THE WORLD
                  </MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn rounded href="#" className="btn-success ">
                    Go somewhere
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "300px",
                  minWidth: "350px",
                  backgroundColor: "#f3f1f1",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <i className="feature-box__icon far fa-compass"></i>
                  <MDBCardTitle className="mt-4">
                    Special title treatment
                  </MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn rounded href="#" className="btn-success ">
                    Go somewhere
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "300px",
                  minWidth: "350px",
                  backgroundColor: "#f3f1f1",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <i className="feature-box__icon far fa-heart"></i>
                  <MDBCardTitle className="mt-4">
                    Special title treatment
                  </MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn rounded href="#" className="btn-success ">
                    Go somewhere
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "300px",
                  minWidth: "350px",
                  maxHeight: "300px",
                  backgroundColor: "#f3f1f1",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <i className="feature-box__icon fas fa-columns "></i>

                  <MDBCardTitle className="mt-4">
                    Special title treatment
                  </MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn rounded href="#" className="btn-success ">
                    Go somewhere
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
