import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-left footer border-top mt-2">
      <div className="text-center p-3 ">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          Hikeable
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
