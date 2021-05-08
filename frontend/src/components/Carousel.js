import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopTours } from "../actions/tourActions";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

const Carousel = ({ tours }) => {
  let index = -1;

  return (
    <>
      {tours &&
        tours.images.map((image) => (
          <MDBCarouselItem itemId={(index += 1)}>
            <MDBCarouselElement src={image} alt={image} />
          </MDBCarouselItem>
        ))}
    </>
  );
};

export default Carousel;
