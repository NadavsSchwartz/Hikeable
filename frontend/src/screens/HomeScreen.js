import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Discover More
        </a>
      </div>

      <div>
        <div className="navigation__background"></div>
      </div>
    </>
  );
};

export default HomeScreen;
