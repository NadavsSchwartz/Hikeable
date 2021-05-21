import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

const MyReviews = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      {userInfo && userInfo.user.reviews
        ? `You have ${userInfo.user.reviews.length} Reviews!`
        : `You currently don't have any reviews`}
    </div>
  );
};

export default MyReviews;
