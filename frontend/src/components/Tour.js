import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardLink,
} from "mdb-react-ui-kit";

const Tour = ({ tour }) => {
  return (
    <MDBCard
      className="text-white text-center mt-5"
      style={{
        backgroundColor: "#2e9157",
      }}
    >
      <MDBCardImage
        src={tour.imageCover}
        alt={tour.name}
        style={{ height: "220px" }}
        className="card-image"
      />
      <MDBCardBody>
        <MDBCardTitle>{tour.name}</MDBCardTitle>
        <div className="row">
          <div className=" col-lg-6 col-md-6 col-sm-6 col-6">
            <p>
              <i className="fas fa-road"></i>
              {tour.locations.length} Stops
            </p>
            <p>
              <i className="fas fa-user-alt "></i> {tour.maxGroupSize} People
            </p>
          </div>

          <div className=" col-lg-6 col-md-6 col-sm-6 col-6">
            <p>
              <i className="far fa-calendar-alt "></i>{" "}
              {tour.startDates[0].split("T")[0]}
            </p>
            <p className="text-truncate">
              {" "}
              <i className="fas fa-map-marker-alt "></i>{" "}
              {tour.startLocation.description}
            </p>
          </div>
        </div>
      </MDBCardBody>
      <MDBListGroup>
        <MDBListGroupItem className="text-muted ">
          <strong>
            {tour.difficulty.toUpperCase()}-{tour.duration} DAYS TOUR
          </strong>
        </MDBListGroupItem>
        <MDBListGroupItem className="text-muted">
          {tour.summary}
        </MDBListGroupItem>
        <MDBListGroupItem className="text-muted">
          <span style={{ color: "#2e9157" }}>${tour.price} Per Person</span>
          <i className="fas fa-star ms-3" style={{ color: "gold" }}></i>
          {tour.ratingsAverage}({tour.ratingsQuantity}) Reviews
        </MDBListGroupItem>

        <MDBCardLink
          href={`/tours/${tour.id}`}
          className="btn-success btn-lg "
          style={{ background: "#2e9157" }}
        >
          DETAILS
        </MDBCardLink>
      </MDBListGroup>
    </MDBCard>
  );
};

export default Tour;
