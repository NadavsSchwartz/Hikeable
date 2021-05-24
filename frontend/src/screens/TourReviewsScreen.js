import {
  MDBBtn,
  MDBCardHeader,
  MDBCarousel,
  MDBCarouselInner,
  MDBContainer,
  MDBInput,
  MDBRange,
} from "mdb-react-ui-kit";

import React, { useState, useEffect } from "react";
import ReviewCarousel from "../components/ReviewCarousel";
import { useSelector, useDispatch } from "react-redux";
import { getTourDetails } from "../actions/tourActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { tourReviewCreate } from "../actions/tourActions";

const TourReviewsScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const tourDetails = useSelector((state) => state.tourDetails);
  const { tour: currentTour, loading, error } = tourDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: reviewLoading, error: reviewError, userInfo } = userLogin;

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    review: "",
  });

  useEffect(() => {
    if (!currentTour) {
      dispatch(getTourDetails(match.params.id));
    }
  }, [match, dispatch, userInfo, history, currentTour]);

  const onChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ height: "100vh" }}>
      <MDBContainer className="text-center" style={{ marginTop: "90px" }}>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {currentTour && (
          <div className="d-flex justify-content-start">
            <MDBBtn href={`/tours/${currentTour.id}`}>back</MDBBtn>
          </div>
        )}

        <MDBCardHeader className="text-center mb-5" id="tour-header">
          REVIEWS
        </MDBCardHeader>
        <MDBCarousel showIndicators="true" showControls dark>
          <MDBCarouselInner>
            {currentTour &&
              currentTour.reviews.map((tour, index) => (
                <ReviewCarousel tour={tour} key={tour._id} index={index} />
              ))}
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
            <form onSubmit={onSubmit}>
              <div className="row justify-content-center text-center">
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}

                <div className="col-md-8 mb-2">
                  <MDBRange
                    value={reviewForm.rating}
                    min="0"
                    max="5"
                    name="rating"
                    step="1"
                    label="Rating"
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="review ">Review</label>
                  <MDBInput
                    value={reviewForm.review}
                    textarea
                    name="review"
                    onChange={onChange}
                    rows={2}
                    required
                  />
                </div>

                <div className="col-12 text-center">
                  <MDBBtn type="submit">Submit Review</MDBBtn>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <p>Log in to leave reviews</p>
        )}
      </MDBContainer>
    </div>
  );
};

export default TourReviewsScreen;
