import {
  MDBCol,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react/cjs/react.development";
import MyBookings from "../components/MyBookings";
import ProfileSettings from "../components/ProfileSettings";

const ProfileScreen = () => {
  const [verticalActive, setVerticalActive] = useState("settings");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <MDBRow
      style={{ marginTop: "100px", marginLeft: "1px" }}
      className="vh-100"
    >
      <MDBCol size="3">
        <MDBTabs pills className="flex-column text-center">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleVerticalClick("settings")}
              active={verticalActive === "settings"}
              style={{ maxWidth: "160px", backgroundColor: "#1cb155" }}
            >
              Settings
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleVerticalClick("myreviews")}
              style={{ maxWidth: "160px", backgroundColor: "#1cb155" }}
              active={verticalActive === "myreviews"}
            >
              My Reviews
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              style={{
                maxWidth: "160px",
                backgroundColor: "#1cb155",
              }}
              onClick={() => handleVerticalClick("mybookings")}
              active={verticalActive === "mybookings"}
            >
              My Bookings
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCol>
      <MDBCol size="7">
        <MDBTabsContent>
          <MDBTabsPane className="ms-5" show={verticalActive === "settings"}>
            <ProfileSettings />
          </MDBTabsPane>
          <MDBTabsPane show={verticalActive === "myreviews"}>
            <h2 className="text-center mb-5">My Reviews</h2>
          </MDBTabsPane>
          <MDBTabsPane show={verticalActive === "mybookings"}>
            <MyBookings />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
  );
};

export default ProfileScreen;
