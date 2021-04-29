import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

const Message = ({ children }) => {
  return (
    <MDBTypography note noteColor="danger">
      <strong>Error:</strong> {children}
    </MDBTypography>
  );
};

export default Message;
