import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

const Header = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
          right
          className="ms-auto"
          show={showNavNoTogglerSecond}
        >
          {userInfo.user ? (
            <MDBNavbarNav right className="d-flex justify-content-end">
              <MDBNavbarLink href="/dashboard" className="text-success">
                {userInfo.user.name}
              </MDBNavbarLink>
              <MDBNavbarLink href="/tours" className="text-success">
                All Tours
              </MDBNavbarLink>
              <MDBNavbarItem>
                <MDBNavbarLink href="/logout">
                  <strong>Logout</strong>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav right className="ms-auto">
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
