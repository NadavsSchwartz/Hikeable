import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";

const MyBookings = () => {
  return (
    <MDBContainer
      style={{
        height: "100vh",
        margin: "35px",
      }}
    >
      {" "}
      <h2 className="text-center mb-5">My Bookings</h2>
      <MDBRow className="d-flex justify-content-center">
        <MDBTable
          pagination
          hover
          bordered
          small
          borderColor="success"
          responsive
        >
          <MDBTableHead>
            {" "}
            <tr>
              <th scope="col">Duration</th>
              <th scope="col">Name</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Price</th>
              <th scope="col">Start Date</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody className="text-center">
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBRow>
    </MDBContainer>
  );
};

export default MyBookings;
