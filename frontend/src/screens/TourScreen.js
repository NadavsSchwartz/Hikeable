import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getTours } from "../actions/tourActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Tour from "../components/Tour";

const TourScreen = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const dispatch = useDispatch();

  const toursInfo = useSelector((state) => state.toursInfo);
  const { tours, loading, error } = toursInfo;

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);
  return (
    <>
      {/* <div className="d-flex justify-content-center">
        <MDBBtn onClick={toggleShow} rounded md="6">
          Toggle Top Products
        </MDBBtn>
        <MDBCollapse show={showShow}>
          <h1>Top Tours:</h1>
          <Carousel />
        </MDBCollapse>
      </div> */}
      <MDBRow fluid className="d-flex justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          tours &&
          tours.map((tour) => (
            <MDBCol
              key={tour.id}
              className="d-flex justify-content-center mt-5"
            >
              <Tour tour={tour} />
            </MDBCol>
          ))
        )}
      </MDBRow>
    </>
  );
};

export default TourScreen;
