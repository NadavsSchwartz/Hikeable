import {
  MDBBtn,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardText,
  MDBCarousel,
  MDBCarouselInner,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTourDetails } from "../actions/tourActions";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import Message from "../components/Message";

import MapBox from "../components/MapBox";
import { getUsersBooking, tourBooking } from "../actions/bookingActions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "../components/Stripe";
const TourDetailScreen = ({ match }) => {
  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  const dispatch = useDispatch();

  const tourDetails = useSelector((state) => state.tourDetails);
  const { tour, loading, error } = tourDetails;

  const userBooking = useSelector((state) => state.userBookings);
  const { myBookings } = userBooking;

  useEffect(() => {
    if (!tour) {
      dispatch(getTourDetails(match.params.id));
    }
    if (!myBookings) {
      dispatch(getUsersBooking());
    }
  }, [match, dispatch, tour, myBookings]);

  const handleBooking = async (ev) => {
    ev.preventDefault();
    dispatch(tourBooking(tour._id));
  };

  return (
    <div className='container'>
      {loading ? (
        <div style={{ marginTop: "100px" }}>
          <Loader />
        </div>
      ) : error ? (
        <div style={{ marginTop: "100px" }}>
          <Message variant='danger'>{error}</Message>
        </div>
      ) : (
        tour && (
          <>
            <div style={{ minWidth: "325px" }}>
              <MDBContainer className='section-tour-details'>
                <div className='d-flex justify-content-center align-items-center'>
                  <p
                    style={{
                      marginTop: "5px",
                      paddingTop: "35px",
                      transform: "skewY(-3deg)",
                    }}
                    className='text-white display-5'
                  >
                    <span className='fw-bold ms-1'>{tour.name}</span>
                  </p>
                </div>
                <div
                  className='d-flex justify-content-center align-items-center mt-3'
                  style={{
                    transform: "skewY(2deg)",
                  }}
                >
                  <div className='me-5 text-white fw-bold'>
                    <i className='far fa-clock'> </i> {tour.duration} DAYS
                  </div>
                  <div className='ms-3 text-white fw-bold'>
                    <i className='fas fa-map-marker-alt'></i>{" "}
                    {tour.startLocation.description}
                  </div>
                </div>
              </MDBContainer>
              <MDBContainer
                className='tour_details'
                style={{
                  transform: "skewY(-2deg)",
                }}
              >
                <div className='row' style={{ transform: "skewY(2deg)" }}>
                  <div className='col-6 mt-5'>
                    <MDBCardHeader className='text-center' id='tour-header'>
                      {" "}
                      TOUR DETAILS
                    </MDBCardHeader>
                    <MDBCardBody className='mt-3'>
                      <MDBCardText className='text-muted mt-1'>
                        <i className='far fa-calendar text-success'></i> NEXT
                        DATE:{" "}
                        <span className='p-2'>
                          {tour.startDates[0].split("T")[0]}
                        </span>
                      </MDBCardText>
                      <MDBCardText className='text-muted'>
                        <i class='fas fa-angle-double-right text-success'> </i>{" "}
                        DIFFICULTY:{" "}
                        <span className='p-2'>{tour.difficulty}</span>
                      </MDBCardText>
                      <MDBCardText className='text-muted'>
                        <i className='fas fa-user text-success'></i>{" "}
                        PARTICIPANTS:{" "}
                        <span className='p-2'>{tour.maxGroupSize}</span>
                      </MDBCardText>
                      <MDBCardText className='text-muted'>
                        <i className='far fa-star text-success'> </i> RATING:
                        <span className='p-2'> {tour.ratingsAverage}/5</span>
                      </MDBCardText>
                    </MDBCardBody>
                  </div>

                  <p
                    className='col-6 text-center'
                    id='tour-header'
                    style={{ marginTop: "64px" }}
                  >
                    ABOUT THE TRIP
                    <MDBCardFooter>
                      <span className='text-muted fs-5 fw-normal'>
                        {tour.description}
                      </span>
                    </MDBCardFooter>
                  </p>
                </div>
                <MDBCardBody className='mt-5'></MDBCardBody>
              </MDBContainer>
            </div>

            <MapBox locations={tour.locations} />

            <MDBCarousel
              showIndicators
              showControls
              dark
              style={{
                transform: "skewY(-2deg)",
              }}
            >
              <MDBCarouselInner className='d-flex'>
                <Carousel tours={tour} key={tour._id} />
              </MDBCarouselInner>
            </MDBCarousel>
          </>
        )
      )}

      <MDBCardHeader className='text-center mt-3' id='tour-header'>
        TOUR GUIDES
      </MDBCardHeader>
      <MDBContainer className='d-flex justify-content-center '>
        <MDBRow>
          {tour &&
            tour.guides.map((tourGuide) => (
              <>
                <div className='col-4 mt-5'>
                  <div className='col-12'>
                    <img
                      className='img-fluid rounded-circle'
                      src={tourGuide.photo}
                      alt={tourGuide.name}
                    />
                  </div>

                  <p className='text-muted text-center col-12 small'>
                    {tourGuide.role.toUpperCase()}
                  </p>
                  <p className='text-center strong'>{tourGuide.name}</p>
                </div>
              </>
            ))}
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='text-center  '>
        <MDBCardHeader className='text-center m-5' id='tour-header'>
          REVIEWS AND BOOKINGS
        </MDBCardHeader>
        <div className='d-flex justify-content-center mb-3'>
          {tour && (
            <div>
              {myBookings &&
              myBookings.find((booking) => booking.tour._id === tour._id) ? (
                <MDBBtn disabled color='success'>
                  You alreay Booked this tour
                </MDBBtn>
              ) : (
                <button className='btn' onClick={handleBooking}>
                  <Elements stripe={stripePromise}>
                    <Stripe tourId={tour._id} />
                  </Elements>
                </button>
              )}
              <a href={`/tours/${tour.id}/reviews`} className='btn'>
                Continue to see reviews
              </a>
            </div>
          )}
        </div>
      </MDBContainer>
    </div>
  );
};

export default TourDetailScreen;
