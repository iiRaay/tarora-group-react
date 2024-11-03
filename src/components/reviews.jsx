import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="left-arrow"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      &#11164; {/*Black leftwards Equilateral Arrowhead html code*/}
    </button>
  );
};

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="right-arrow" onClick={onClick} aria-label="Next Slide">
      &#11166; {/*Black Rightwards Equilateral Arrowhead html code*/}
    </button>
  );
};

const Reviews = () => {
  return (
    <div id="reviews" className="text-center">
      <div className="container" id="review_container">
        <div className="row">
          <div class="col-sm-12 col-md-4" id="reivew-column-1">
            <p id="rating_title">Excellent</p>
            <p id="rating_star">★★★★★</p>
            <p>
              Based on <b>40+</b> Reviews
            </p>
            <img
              src="img\reviews\google_logo.png"
              alt="google logo"
              id="google_logo"
            />
          </div>
          <div class="col-sm-12 col-md-8">One of three columns</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
