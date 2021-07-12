import React from "react";
import { MDBCarouselItem, MDBIcon } from "mdb-react-ui-kit";

const ReviewCarousel = ({ tour, index }) => {
  return (
    <MDBCarouselItem itemId={index}>
      <div className="testimonial">
        <div className="avatar mx-auto ">
          <img
            src={
              tour.user ? tour.user.photo : <MDBIcon icon="user-alt"></MDBIcon>
            }
            alt="User"
            className="rounded-circle img-fluid"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </div>
      <div>
        {/* <h4 className="font-weight-bold ">{tour.user.name}</h4> */}
        <span>
          {" "}
          <i className="fas fa-quote-left"></i>
          {tour.review}
        </span>
      </div>
      <p className="mb-5">
        <span>
          <i
            className={
              tour.rating >= 1
                ? "fas fa-star text-warning"
                : tour.rating >= 0.5
                ? "fas fa-star-half-alt text-warning"
                : "far fa-star "
            }
          ></i>
        </span>
        <span>
          <i
            className={
              tour.rating >= 2
                ? "fas fa-star text-warning"
                : tour.rating >= 1.5
                ? "fas fa-star-half-alt text-warning"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              tour.rating >= 3
                ? "fas fa-star text-warning"
                : tour.rating >= 2.5
                ? "fas fa-star-half-alt text-warning"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              tour.rating >= 4
                ? "fas fa-star text-warning"
                : tour.rating >= 3.5
                ? "fas fa-star-half-alt text-warning"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              tour.rating >= 5
                ? "fas fa-star text-warning"
                : tour.rating >= 4.5
                ? "fas fa-star-half-alt text-warning"
                : "far fa-star "
            }
          ></i>
        </span>
      </p>
    </MDBCarouselItem>
  );
};

export default ReviewCarousel;
