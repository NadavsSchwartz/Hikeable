import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersBooking } from "../actions/bookingActions";
import Tour from "./Tour";
import Loader from "./Loader";
import Message from "./Message";

const MyBookings = () => {
  const dispatch = useDispatch();
  const userBooking = useSelector((state) => state.userBookings);
  const { loading, error, myBookings } = userBooking;

  useEffect(() => {
    if (!myBookings) {
      dispatch(getUsersBooking());
    }
  }, [dispatch, myBookings]);
  return (
    <MDBContainer
      style={{
        height: "100vh",
        margin: "35px",
      }}
    >
      <h2 className="text-center mb-5">My Bookings</h2>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      {myBookings &&
        myBookings.map((booking) => (
          <Tour tour={booking.tour} id={booking.tour._id} />
        ))}
    </MDBContainer>
  );
};

export default MyBookings;
