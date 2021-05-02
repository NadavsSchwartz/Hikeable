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
                  minHeight: "150px",
                  minWidth: "250px",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "150px",
                  minWidth: "250px",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "150px",
                  minWidth: "250px",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "150px",
                  minWidth: "250px",
                  maxHeight: "300px",
                  maxWidth: "400px",
                }}
                alignment="center"
              >
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
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
