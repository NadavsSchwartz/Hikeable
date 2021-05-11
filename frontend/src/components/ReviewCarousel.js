import React from "react";
import { MDBCarouselItem, MDBCarouselElement } from "mdb-react-ui-kit";

const ReviewCarousel = ({ TourDetails }) => {
  let index = -1;

  return (
    <>
      {TourDetails &&
        TourDetails.reviews.map((tour) => (
          <MDBCarouselItem itemId={index + 1} id={index+1}>
            <div className="testimonial">
              <div className="avatar mx-auto mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle img-fluid"
                  alt={tour.user.name}
                />
              </div>

              <p>
                {" "}
                <i class="fas fa-quote-left"></i>
                {tour.review}
              </p>
              <h4 className="fw-bold">{tour.user.name}</h4>
              <span>
                <i
                  className={
                    tour.rating >= 1
                      ? "fas fa-star gold"
                      : tour.rating >= 0.5
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              </span>
              <span>
                <i
                  className={
                    tour.rating >= 2
                      ? "fas fa-star"
                      : tour.rating >= 1.5
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              </span>
              <span>
                <i
                  className={
                    tour.rating >= 3
                      ? "fas fa-star"
                      : tour.rating >= 2.5
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              </span>
              <span>
                <i
                  className={
                    tour.rating >= 4
                      ? "fas fa-star"
                      : tour.rating >= 3.5
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              </span>
              <span>
                <i
                  className={
                    tour.rating >= 5
                      ? "fas fa-star"
                      : tour.rating >= 4.5
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              </span>
            </div>
            <a
              className="carousel-control-prev left carousel-control"
              href="#carousel-example-1"
              role="button"
              data-slide="prev"
            >
              <span className="icon-prev" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next right carousel-control"
              href={index+1}
              role="button"
              data-slide="next"
            >
              <span className="icon-next" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </MDBCarouselItem>
        ))}
    </>
  );
};

export default ReviewCarousel;
//
