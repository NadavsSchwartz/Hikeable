import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
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
    <MDBContainer>
      <h2 className="text-center ">My Bookings</h2>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <MDBRow>
        {myBookings &&
          myBookings.map((booking) => (
            <MDBCol className="col-lg-4 col-md-6 col-sm-12">
              <Tour
                tour={booking.tour}
                id={booking.tour._id}
                booking={booking._id}
              />
            </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default MyBookings;
