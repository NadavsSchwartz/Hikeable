import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopTours } from "../actions/tourActions";
import AboutSection from "../components/AboutSection";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const topTours = useSelector((state) => state.topTours);
  const { loading, error, topTours: tours } = topTours;
  useEffect(() => {
    dispatch(getTopTours());
  }, [dispatch]);
  return (
    <>
      <div className="intro">
        <div
          className="mask"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            height: "100%",
          }}
        >
          <MDBContainer
            fluid
            className="d-flex align-items-center justify-content-center h-100"
          >
            <MDBRow className="d-flex justify-content-center text-center">
              <MDBCol>
                <h2
                  style={{ color: "#dadcda" }}
                  className="display-2 font-weight-bold pt-4 mb-2"
                >
                  Hikeable
                </h2>

                <hr className="text-white" />

                <h4 className=" my-5" style={{ color: "#dadcda" }}>
                  OUTDOORS IS WHERE LIFE HAPPENS
                </h4>
                <MDBBtn rounded href="#discover-more" className="btn-success ">
                  Discover more
                  <i className="fa fa-book ms-2"></i>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
      <AboutSection />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <MDBContainer style={{ marginTop: "200px" }}>
          <MDBRow md="12">
            {tours &&
              tours.map((tour) => (
                <MDBCol size="3" style={{ minWidth: "300px", padding: "auto" }}>
                  <Card
                    cardImg={tour.imageCover}
                    cardAlt={tour.name}
                    cardTitle={tour.name}
                    cardText={tour.summary}
                    cardPrice={tour.price}
                    cardDuration={tour.durationWeeks}
                    cardDifficulty={tour.difficulty}
                    cardRating={tour.ratingsAverage}
                  />
                </MDBCol>
              ))}
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
};

export default HomeScreen;
