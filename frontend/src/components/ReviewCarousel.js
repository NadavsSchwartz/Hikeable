import React from "react";
import { MDBCarouselItem } from "mdb-react-ui-kit";

const ReviewCarousel = ({ TourDetails }) => {
  let index = -1;
  return (
    <>
      {TourDetails &&
        TourDetails.reviews.map((tour) => (
          <>
            <MDBCarouselItem itemId={(index += 1)}>
              <div className="testimonial">
                <div className="avatar mx-auto mb-4">
                  <img
                    src={tour.user.photo}
                    alt={tour.user.name}
                    className="rounded-circle img-fluid"
                  />
                </div>
              </div>
              <p className="mb-5">
                <h4 className="font-weight-bold ">{tour.user.name}</h4>
                <span>
                  {" "}
                  <i class="fas fa-quote-left"></i>
                  {tour.review}
                </span>
              </p>
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
          </>
        ))}
    </>
  );
};

export default ReviewCarousel;
