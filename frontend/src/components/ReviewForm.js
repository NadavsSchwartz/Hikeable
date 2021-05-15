import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBRange } from "mdb-react-ui-kit";

const ReviewForm = () => {
  const [formValue, setFormValue] = useState({
    fname: "Mark",
    lname: "Otto",
    rating: 0,
    review: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBValidation className="row g-5" noValidate>
      <div className="col-md-6">
        <MDBInput
          value={formValue.fname}
          name="fname"
          onChange={onChange}
          id="validationCustom01"
          required
          label="First name"
          validation="Looks good!"
          disabled
        />
      </div>
      <div className="col-md-6">
        <MDBInput
          value={formValue.lname}
          name="lname"
          onChange={onChange}
          id="validationCustom02"
          label="Last name"
          disabled
        />
      </div>

      <div className="col-md-6">
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
      <div className="col-md-6">
        <label htmlFor="review">Review</label>
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
  );
};

export default ReviewForm;
