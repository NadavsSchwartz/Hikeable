import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      backgroundColor="light"
      className="text-center text-lg-left footer"
    >
      <div
        className="text-center p-3 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          Hikeable
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
