import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBRange } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { tourReviewCreate } from "../actions/tourActions";
const ReviewForm = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    review: "",
  });

  useEffect(() => {}, [userInfo]);

  const onChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    tourReviewCreate();
  };

  return (
    <form onSubmit={onSubmit}>
      <MDBValidation
        className="row justify-content-center text-center"
        noValidate
      >
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <div className="col-md-8 mb-2">
          <MDBRange
            value={reviewForm.rating}
            min="0"
            max="5"
            name="rating"
            step="1"
            label="Rating"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6 mb-4">
          <label htmlFor="review ">Review</label>
          <MDBInput
            value={reviewForm.review}
            textarea
            name="review"
            onChange={onChange}
            rows={2}
            required
          />
        </div>

        <div className="col-12 text-center">
          <MDBBtn type="submit">Submit Review</MDBBtn>
        </div>
      </MDBValidation>
    </form>
  );
};

export default ReviewForm;
