import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section
        className="section-features bg-image img-fluid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(#eee, 0.7), rgba(#000, 0.7)), url('https://hdwallpaperim.com/wp-content/uploads/2017/08/23/458900-nature-photography-landscape-waterfall-lake-mountains-snow-clouds-sky-Norway-sunrise-hiking-748x502.jpg')",
        }}
      >
        <div className="section-features__grid">
          <MDBRow>
            <MDBCol className="d-flex justify-content-center">
              <MDBCard
                style={{
                  margin: "15px",
                  minHeight: "300px",
                  minWidth: "350px",
                  maxWidth: "350px",

                  backgroundColor: "hsla(0,0%,100%,0.8)",
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
                  backgroundColor: "hsla(0,0%,100%,0.8)",

                  maxWidth: "350px",
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
                  backgroundColor: "hsla(0,0%,100%,0.8)",

                  maxWidth: "350px",
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
                  backgroundColor: "hsla(0,0%,100%,0.8)",

                  maxWidth: "350px",
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
