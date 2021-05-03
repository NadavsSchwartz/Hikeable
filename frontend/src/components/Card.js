import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardText,
  MDBCardTitle,
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
    // <MDBCard className="text-center mt-5 ">
    //   <div
    //     className="bg-image "
    //     style={{ transform: "skewY(-4deg)", height: "250px" }}
    //   >
    //     <img
    //       src={cardImg}
    //       alt={cardAlt}
    //       fluid
    //       //   style={{ transform: "skewY(-47deg)", backgroundSize: "cover" }}
    //     />
    //     <div
    //       className="mask card-image"
    //       style={{
    //         height: "250px",
    //       }}
    //     ></div>
    //   </div>
    //   <MDBCardBody>
    //     <MDBCardTitle>{cardTitle}</MDBCardTitle>
    //     <MDBCardText>{cardText}</MDBCardText>
    //   </MDBCardBody>
    //   <MDBCardFooter>
    //     <MDBCardText className="d-block d-sm-block">
    //       <h5>{cardPrice}</h5>
    //       <p>{cardRating}</p>
    //     </MDBCardText>
    //     <MDBBtn rounded>Button Text</MDBBtn>
    //   </MDBCardFooter>
    // </MDBCard>
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--1">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            The Sea Explorer
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: easy</li>
          </ul>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$297</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
