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

const Card = ({
  cardImg,
  cardAlt,
  cardTitle,
  cardText,
  cardPrice,
  cardDuration,
  cardDifficulty,
  cardRating,
}) => {
  return (
    <MDBCard className=" mt-5 ">
      <div className="bg-image card-image" style={{ height: "250px" }}>
        <img src={cardImg} alt={cardAlt} />
      </div>
      <MDBCardBody>
        <MDBCardTitle
          className="text-success"
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {cardTitle}
        </MDBCardTitle>
        <MDBCardText style={{ height: "65px" }}>{cardText}</MDBCardText>
      </MDBCardBody>
      <div className="row" style={{ marginLeft: "15px" }}>
        <div className="col-lg-6 col-md-6">
          <span>Difficulty: {cardDifficulty}</span>

          <p>{cardDuration} DAYS</p>
        </div>
        <div className=" col-lg-6 col-md-6">
          ${cardPrice}
          <p>Rating:{cardRating}</p>
        </div>
      </div>
      <MDBCol className='text-center mb-2'>
        {" "}
        <MDBBtn className="btn-success " rounded>
          Discover More
        </MDBBtn>
      </MDBCol>
    </MDBCard>
  );
};

export default Card;
