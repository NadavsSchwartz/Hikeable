import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../actions/userActions";

import Loader from "./Loader";
import Message from "./Message";

const ProfileSettings = ({ history, location }) => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.user.name);
    }
  }, [userInfo, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ name: userName }));
  };
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <form onSubmit={submitHandler}>
            <p className="h4 text-center mb-4">Update Profile Details</p>

            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}

            <label htmlFor="name" className="grey-text">
              Name
            </label>
            <MDBInput
              type="name"
              id="name"
              className="form-control"
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="password" className="grey-text ">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="passwordConfirmation" className="grey-text mt-4">
              Password Confirmation
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="success" type="submit">
                Update Profile Details
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProfileSettings;
