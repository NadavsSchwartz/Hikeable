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
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" className="text-success">
          Hikeable
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          className="text-success"
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {userInfo.user ? (
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
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
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
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
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="light">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Header;
