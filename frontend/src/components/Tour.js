import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";

const Tour = ({ tour }) => {
  return (
    <MDBCard
      className="text-white"
      style={{
        width: "20rem",

        backgroundColor: "#28b485",
      }}
    >
      <MDBCardImage src={tour.imageCover} alt={tour.name} position="top" style={{height: '200px'}} />
      <MDBCardBody>
        <MDBCardTitle className="mb-3 text-center">{tour.name}</MDBCardTitle>
        <MDBCardText>
          <i className="fas fa-map-marker-alt ms-3"></i>{" "}
          {tour.startLocation.description}
          <i className="fas fa-user-alt ms-4"></i> {tour.maxGroupSize} People
        </MDBCardText>

        <MDBCardText>
          <i className="far fa-calendar-alt ms-3"></i>{" "}
          {tour.startDates[0].split("T")[0]}
          <i className="fas fa-map-marker-alt ms-5"></i> {tour.locations.length}{" "}
          Stops
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem className="text-muted text-center">
          <strong>
            {tour.difficulty.toUpperCase()}-{tour.duration} DAYS TOUR
          </strong>
        </MDBListGroupItem>
        <MDBListGroupItem className="text-muted">
          {tour.summary}
        </MDBListGroupItem>
        <MDBListGroupItem className="text-muted">
          <span style={{ color: "#28b485" }}>${tour.price} Per Person</span>
          <i className="fas fa-star ms-3" style={{ color: "gold" }}></i>
          {tour.ratingsAverage}({tour.ratingsQuantity}) Reviews
        </MDBListGroupItem>
        <MDBListGroupItem className="text-muted text-center">
          <MDBBtn style={{ backgroundColor: "#28b485" }}>DETAILS</MDBBtn>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  );
};

export default Tour;
