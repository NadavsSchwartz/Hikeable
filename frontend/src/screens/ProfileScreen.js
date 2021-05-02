import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react/cjs/react.development";
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
    // <div className="user-view">
    //   <nav className="user-view__menu">
    //     <ul className="side-nav">
    //       <li className="side-nav--active"></li>
    //       <li>
    //         <a href="/my-tours">My bookings</a>
    //       </li>
    //       <li>
    //         <a href="#">My reviews</a>
    //       </li>
    //       <li>
    //         <a href="#">Billing</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="user-view__content">
    //     <div className="user-view__form-container">
    //       <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
    //       <form className="form form-user-data">
    //         <div className="form__group">
    //           <label className="form__label" for="name">
    //             Name
    //           </label>
    //           <input
    //             className="form__input"
    //             id="name"
    //             type="text"
    //             value="Nadav Schwartz"
    //             required=""
    //             name="name"
    //           />
    //         </div>

    //         <div className="form__group ma-bt-md">
    //           <label className="form__label" for="email">
    //             Email address
    //           </label>
    //           <input
    //             className="form__input"
    //             id="email"
    //             type="email"
    //             value="nadavschwartz58@gmail.com"
    //             required=""
    //             name="email"
    //           />
    //         </div>
    //         <MDBBtn className="btn">Save settings</MDBBtn>
    //       </form>
    //     </div>
    //     <div className="line">&nbsp;</div>
    //     <div className="user-view__form-container">
    //       <h2 className="heading-secondary ma-bt-md">Password change</h2>
    //       <form className="form form-user-password">
    //         <div className="form__group">
    //           <label className="form__label" for="password-current">
    //             Current password
    //           </label>
    //           <input
    //             className="form__input"
    //             id="password-current"
    //             type="password"
    //             placeholder="••••••••"
    //             minlength="8"
    //           />
    //         </div>
    //         <div className="form__group">
    //           <label className="form__label" for="password">
    //             New password
    //           </label>
    //           <input
    //             className="form__input"
    //             id="password"
    //             type="password"
    //             placeholder="••••••••"
    //             required=""
    //             minlength="8"
    //           />
    //         </div>
    //         <div className="form__group right">
    //           <button className="btn btn--small btn--green btn--save-password">
    //             Save password
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <MDBRow style={{ marginTop: "100px", marginLeft: "1px" }}>
      <MDBCol size="3">
        <MDBTabs pills className="flex-column text-center">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleVerticalClick("settings")}
              active={verticalActive === "settings"}
              style={{ maxWidth: "160px" }}
            >
              Settings
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleVerticalClick("myreviews")}
              style={{ maxWidth: "160px" }}
              active={verticalActive === "myreviews"}
            >
              My Reviews
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              style={{ maxWidth: "160px" }}
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
            My Reviews
          </MDBTabsPane>
          <MDBTabsPane show={verticalActive === "mybookings"}>
            My bookings
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
  );
};

export default ProfileScreen;
