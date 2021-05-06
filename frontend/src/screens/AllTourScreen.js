import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

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
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <MDBContainer>
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
    </>
  );
};

export default AllTourScreen;
