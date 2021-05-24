import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { logout } from "../actions/userActions";

const Header = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <MDBNavbar expand="lg" light bgColor="white" className="fixed-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" className="text-success">
          <img
            src="https://i.ibb.co/Bncx4t9/Screen-Shot-2021-05-02-at-9-04-40-AM.png"
            alt=""
            style={{ height: "55px" }}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          className="text-success"
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse
          navbar
          right="true"
          className="ms-auto"
          show={showNavNoTogglerSecond}
        >
          {userInfo && userInfo.user ? (
            <MDBNavbarNav
              right
              className="d-flex justify-content-end align-items-center"
            >
              <MDBNavbarLink href="/profile" className="text-success">
                {userInfo && userInfo.user.name}
              </MDBNavbarLink>
              <MDBNavbarLink href="/tours" className="text-success">
                All Tours
              </MDBNavbarLink>
              <MDBNavbarItem onClick={logoutHandler}>
                <strong>Logout</strong>
              </MDBNavbarItem>
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav
              right
              className="d-flex justify-content-end align-items-center"
            >
              <MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login" className="text-success">
                    Login
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/signup" className="text-success">
                  Register
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
