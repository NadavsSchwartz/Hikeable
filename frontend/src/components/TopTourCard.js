import {
  MDBCard,
  MDBCardBody,
  MDBCardLink,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";

const TopTourCard = ({ tour }) => {
  return (
    <MDBCard className=" mt-5 ">
      <div className="bg-image ">
        <img
          src={tour.imageCover}
          alt={tour.name}
          className="img-fluid card-image"
        />
      </div>
      <MDBCardBody>
        <MDBCardTitle
          className="text-success "
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {tour.name}
        </MDBCardTitle>
        <MDBCardText style={{ height: "55px" }}>{tour.summary}</MDBCardText>
      </MDBCardBody>
      <div className="row" style={{ marginLeft: "15px" }}>
        <div className="col-lg-6 col-md-6">
          <span>Difficulty: {tour.difficulty}</span>

          <p>{tour.duration} DAYS</p>
        </div>
        <div className=" col-lg-6 col-md-6">
          ${tour.price}
          <p>Rating:{tour.ratingsAverage}</p>
        </div>
      </div>
      <MDBCol className="text-center mb-3">
        {" "}
        <MDBCardLink
          href={`/tours/${tour.id}`}
          className="btn-success btn-lg btn-rounded"
        >
          Discover More
        </MDBCardLink>
      </MDBCol>
    </MDBCard>
  );
};

export default TopTourCard;
