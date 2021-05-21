import {
  MDBBtn,
  MDBCardHeader,
  MDBCarousel,
  MDBCarouselInner,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import ReviewCarousel from "../components/ReviewCarousel";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTourDetails } from "../actions/tourActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ReviewForm from "../components/ReviewForm";

const TourReviewsScreen = ({ match }) => {
  const dispatch = useDispatch();

  const tourDetails = useSelector((state) => state.tourDetails);
  const { tour, loading, error } = tourDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: reviewLoading, error: reviewError, userInfo } = userLogin;

  useEffect(() => {
    if (!tour) {
      dispatch(getTourDetails(match.params.id));
    }
  }, [match, dispatch, tour]);

  return (
    <div>
      <MDBContainer className="text-center" style={{ marginTop: "90px" }}>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {tour && (
          <div className="d-flex justify-content-start">
            <MDBBtn href={`/tours/${tour.id}`}>back</MDBBtn>
          </div>
        )}

        <MDBCardHeader className="text-center mb-5" id="tour-header">
          REVIEWS
        </MDBCardHeader>
        <MDBCarousel showIndicators showControls dark>
          <MDBCarouselInner>
            <ReviewCarousel TourDetails={tour} />
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>

      <MDBContainer>
        <MDBCardHeader className="text-center mb-5" id="tour-header">
          LEAVE A REVIEW
        </MDBCardHeader>
        {reviewError && <Message>{reviewError}</Message>}
        {reviewLoading && <Loader />}
        {userInfo && userInfo.user ? (
          <div>
            <ReviewForm />{" "}
            <MDBCardHeader className="text-center m-5" id="tour-header">
              BOOK
            </MDBCardHeader>
            <div className="d-flex justify-content-center mb-3">
              {tour && (
                <a href={`/tours/${tour.id}/book`} className="btn">
                  Continue to Booking
                </a>
              )}
            </div>
          </div>
        ) : (
          <p>Log in to leave reviews</p>
        )}
      </MDBContainer>
    </div>
  );
};

export default TourReviewsScreen;
