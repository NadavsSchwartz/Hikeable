import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBRange } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
const ReviewForm = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const [formValue, setFormValue] = useState({
    name: "",
    rating: 0,
    review: "",
  });

  useEffect(() => {
    if (userInfo.user) {
      setFormValue({ name: userInfo.user.name });
    }
  }, [userInfo]);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <MDBValidation
        className="row justify-content-center text-center"
        noValidate
      >
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <div className="col-md-6 mb-2">
          <MDBInput
            value={formValue.name}
            name="name"
            onChange={onChange}
            required
            label="Name"
            validation="Looks good!"
            disabled
          />
        </div>

        <div className="col-md-8 mb-2">
          <MDBRange
            value={formValue.rating}
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
            value={formValue.review}
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
