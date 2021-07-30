import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

const SuccessScreen = ({ history }) => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   window
  //     .fetch(`http://localhost:3000/api/v1/booking/order/success/${session}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(userInfo).token}`,
  //       },
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setCustomer(res.message);
  //     });
  // }, [session]);
  return (
    <div style={{ marginTop: "200px", height: "100vh" }}>
      Thank you for your order, you can see all the details on your profile.
    </div>
  );
};

export default SuccessScreen;
