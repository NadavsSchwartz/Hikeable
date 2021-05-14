import React from "react";

import { MDBCarouselItem, MDBCarouselElement } from "mdb-react-ui-kit";

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
