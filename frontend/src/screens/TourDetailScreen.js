import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTourDetails } from "../actions/tourActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const TourDetailScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {
    userInfo: { user },
  } = userLogin;

  const tourDetails = useSelector((state) => state.tourDetails);
  const { tour, loading, error } = tourDetails;

  useEffect(() => {
    if (!tour) {
      dispatch(getTourDetails(match.params.id));
    }
  }, [match, dispatch, tour]);
  return (
    <div>
      {loading ? (
        <Loader style={{ marginTop: "200px" }} />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        tour && (
          <div style={{ minWidth: "325px" }}>
            <MDBContainer className="section-tour-details">
              <div className="d-flex justify-content-center align-items-center">
                <p
                  style={{
                    marginTop: "5px",
                    paddingTop: "35px",
                    transform: "skewY(-3deg)",
                  }}
                  className="text-white display-5"
                >
                  <span className="fw-bold ms-1">{tour.name}</span>
                </p>
              </div>
              <div
                className="d-flex justify-content-center align-items-center mt-3"
                style={{
                  transform: "skewY(2deg)",
                }}
              >
                <div className="me-5 text-white">
                  <i className="far fa-clock"> </i> {tour.duration} DAYS
                </div>
                <div className="ms-3 text-white">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {tour.startLocation.description}
                </div>
              </div>
            </MDBContainer>
            <MDBContainer
              className="tour_details"
              style={{
                transform: "skewY(-2deg)",
              }}
            >
              <div className="row" style={{ transform: "skewY(2deg)" }}>
                <div className="col-6 mt-5">
                  <MDBCardHeader className="text-center" id="tour-header">
                    {" "}
                    TOUR DETAILS
                  </MDBCardHeader>
                  <MDBCardBody className="mt-3">
                    <MDBCardText className="text-muted mt-1">
                      <i class="far fa-calendar text-success"></i> NEXT DATE:{" "}
                      <span className="p-2">
                        {tour.startDates[0].split("T")[0]}
                      </span>
                    </MDBCardText>
                    <MDBCardText className="text-muted">
                      <i class="fas fa-angle-double-right text-success"> </i>{" "}
                      DIFFICULTY: <span className="p-2">{tour.difficulty}</span>
                    </MDBCardText>
                    <MDBCardText className="text-muted">
                      <i className="fas fa-user text-success"></i> PARTICIPANTS:{" "}
                      <span className="p-2">{tour.maxGroupSize}</span>
                    </MDBCardText>
                    <MDBCardText className="text-muted">
                      <i className="far fa-star text-success"> </i> RATING:
                      <span className="p-2"> {tour.ratingsAverage}/5</span>
                    </MDBCardText>
                  </MDBCardBody>

                  <MDBCardHeader className="text-center mt-3" id="tour-header">
                    {" "}
                    TOUR GUIDES
                  </MDBCardHeader>
                  {tour.guides.map((tourGuide) => (
                    <MDBContainer>
                      <MDBRow className="mt-2 text-center">
                        <img
                          src="https://www.natours.dev/img/users/user-12.jpg"
                          alt={tourGuide.name}
                          style={{
                            borderRadius: "50%",
                            width: "6rem",
                          }}
                          className="col-sm-3 col-md-3 col-lg-3 "
                        />
                        <MDBCardText className="col-sm-3 col-md-4 col-lg-3 fw-bold text-muted mt-1">
                          {tourGuide.role.toUpperCase()}
                        </MDBCardText>
                        <span className="col-sm-4 col-md-4 col-lg-3 mt-1">
                          {tourGuide.name}
                        </span>
                      </MDBRow>
                    </MDBContainer>
                  ))}
                </div>

                <p
                  className="col-6 text-center"
                  id="tour-header"
                  style={{ marginTop: "64px" }}
                >
                  ABOUT THE TRIP
                  <MDBCardFooter>
                    <span className="text-muted fs-5 fw-normal">
                      {tour.description}
                    </span>
                  </MDBCardFooter>
                </p>
              </div>
            </MDBContainer>
          </div>
        )
      )}
    </div>
  );
};

export default TourDetailScreen;
// <div className="col-md-6" style={{ transform: "skewY(2deg)" }}>
// MDBCardHeader className="text-center"
