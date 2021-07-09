import React, { useEffect, useState } from "react";

const SuccessScreen = ({ match, history }) => {
  const session = history.location.search.split("%")[0];
  console.log(session);
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    window
      .fetch(`http://localhost:3000/api/v1/booking/order/success${session}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        },
      })
      .then((res) => {
        // setCustomer(res.json);
        return res.json();
      })
      .then((res) => {
        setCustomer(res.message);
      });
  }, []);
  return <div style={{ marginTop: "200px" }}>{customer}</div>;
};

export default SuccessScreen;
