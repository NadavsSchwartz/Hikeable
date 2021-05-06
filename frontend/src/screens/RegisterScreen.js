import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

const RegisterScreen = ({ history, location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, confirmPassword));
    }
  };
  return (
    <MDBContainer className="" style={{ marginTop: "100px" }}>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}

      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="7">
          <form onSubmit={submitHandler}>
            <p className="h4 text-center mb-4">Register</p>
            <label htmlFor="text" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password" className="grey-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <label htmlFor="passwordConfirmation" className="grey-text">
              Password Confirmation
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="text-center mt-4">
              <MDBBtn color="white" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
          <MDBCol className="text-center mt-3">
            Already have an account?
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterScreen;
