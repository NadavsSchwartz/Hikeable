import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsersBooking } from "../actions/bookingActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MyBookings from "../components/MyBookings";
import MyReviews from "../components/MyReviews";
import ProfileSettings from "../components/ProfileSettings";

const ProfileScreen = ({ history }) => {
  const [showProfile, SetShowProfile] = useState(false);
  const [showReviews, SetShowReviews] = useState(false);
  const [showBooking, SetShowBooking] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleProfile = () => {
    if (showProfile === false) {
      SetShowProfile(true);
      SetShowReviews(false);
      SetShowBooking(false);
    } else {
      SetShowProfile(false);
    }
  };

  const handleReviews = () => {
    if (showReviews === false) {
      SetShowProfile(false);
      SetShowBooking(false);
      SetShowReviews(true);
    } else {
      SetShowReviews(false);
    }
  };

  const handleBooking = () => {
    if (showBooking === false) {
      SetShowReviews(false);
      SetShowProfile(false);
      SetShowBooking(true);
    } else {
      SetShowBooking(false);
    }
  };
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  //1cb155
  return (
    <div className="vh-100">
      <header>
        <MDBNavbar expand="lg" light bgColor="white" className="pt-5 mt-5">
          <MDBContainer fluid>
            <MDBNavbarNav right>
              <MDBNavbarItem className="m-1">
                <MDBBtn role="a" color="#" active onClick={handleProfile}>
                  Profile Settings
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem className="m-1">
                <MDBBtn color="white" onClick={handleReviews}>
                  My Reviews
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem className="m-1">
                <MDBBtn color="white" onClick={handleBooking}>
                  My Booking
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </header>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}

      <MDBContainer className="mt-5">
        {showProfile ? <ProfileSettings /> : ""}
        {showReviews ? <MyReviews /> : ""}
        {showBooking ? <MyBookings /> : ""}
      </MDBContainer>
    </div>
  );
};

export default ProfileScreen;
