import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <MDBContainer style={{ height: "100vh" }}>
      <MDBRow
        className='d-flex justify-content-center'
        style={{ marginTop: "100px" }}
      >
        <MDBCol md='7'>
          <form onSubmit={submitHandler}>
            <p className='h4 text-center mb-4'>Sign in</p>

            {error && <Message variant='danger'>{error}</Message>}

            <label htmlFor='email' className='grey-text'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor='password' className='grey-text'>
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='text-center mt-4'>
              <MDBBtn color='white' type='submit'>
                {loading && <Loader />}Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginScreen;
