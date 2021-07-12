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
    <div className="min-vh-100">
      <header className="">
        <MDBNavbar className="pt-5 mt-5">
          <MDBContainer fluid className="m-0">
            <MDBNavbarNav
              expand="sm"
              className="d-flex flex-row justify-content-evenly mb-1"
            >
              <MDBNavbarItem className="" style={{ marginRight: "3px" }}>
                <MDBBtn color="#" active onClick={handleProfile} size="md">
                  Profile Settings
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem className="" style={{ marginRight: "3px" }}>
                <MDBBtn color="white" onClick={handleReviews} size="md">
                  My Reviews
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem className="" style={{ marginRight: "3px" }}>
                <MDBBtn color="white" onClick={handleBooking} size="md">
                  My Booking
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </header>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}

      <MDBContainer className="mt-3">
        {showProfile ? (
          <>
            <div>
              <ProfileSettings />
            </div>
          </>
        ) : (
          ""
        )}
        {showReviews ? (
          <>
            <div>
              <MyReviews />
            </div>
          </>
        ) : (
          ""
        )}
        {showBooking ? (
          <>
            <div>
              <MyBookings />
            </div>
          </>
        ) : (
          ""
        )}
      </MDBContainer>
    </div>
  );
};

export default ProfileScreen;
