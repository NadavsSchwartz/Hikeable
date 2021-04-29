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
import Loader from "./Loader";
import Message from "./Message";
const Carousel = () => {
  const dispatch = useDispatch();

  const topTours = useSelector((state) => state.topTours);
  const { loading, error, topTours: tours } = topTours;
  let index = -1;
  useEffect(() => {
    dispatch(getTopTours());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        {tours &&
          tours.map((tour) => (
            <MDBCarouselItem itemId={(index += 1)}>
              <MDBCarouselElement src={tour.imageCover} alt={tour.name} />

              <MDBCarouselCaption className="d-block d-sm-block">
                <h5>{tour.name}</h5>
                <p>{tour.summary}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default Carousel;
