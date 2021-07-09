import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getTours } from "../actions/tourActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Tour from "../components/Tour";

const AllTourScreen = () => {
  const dispatch = useDispatch();

  const toursInfo = useSelector((state) => state.toursInfo);
  const { tours, loading, error } = toursInfo;

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="position-relative">
        <img
          src="/alltours500x1700.png"
          alt="trail"
          className=" shadow-4"
          style={{ minHeight: "150px", maxHeight: "500px", width: "100%" }}
        />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <h1 className="position-absolute top-50 start-50 translate-middle shadow-5 text-white fw-bold w-100 text-center border-bottom display-2">
          FIND YOUR NEXT TRIP
        </h1>
      </div>
      {loading ? (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <Loader />
        </div>
      ) : error ? (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <Message variant="danger">{error}</Message>
        </div>
      ) : (
        <MDBContainer style={{ marginTop: "20px" }}>
          <MDBRow className="d-flex justify-content-center">
            {tours &&
              tours.map((tour) => (
                <MDBCol
                  key={tour.id}
                  className="col-lg-2 col-md-6 col-sm-4"
                  style={{ minWidth: "340px" }}
                >
                  <Tour tour={tour} />
                </MDBCol>
              ))}
          </MDBRow>
        </MDBContainer>
      )}
    </div>
  );
};

export default AllTourScreen;
