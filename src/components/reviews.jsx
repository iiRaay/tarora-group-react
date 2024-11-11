import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="left-arrow"
      onClick={onClick}
      id="left-arrow2"
      aria-label="Previous Slide"
    >
      &#11164; {/*Black leftwards Equilateral Arrowhead html code*/}
    </button>
  );
};

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="right-arrow"
      onClick={onClick}
      id="right-arrow2"
      aria-label="Next Slide"
    >
      &#11166; {/*Black Rightwards Equilateral Arrowhead html code*/}
    </button>
  );
};

export const Reviews = (props) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="reviews">
      <div className="container" id="review_container">
        <div className="row" id="reviewRow">
          <div class="col-sm-12 col-md-2" id="reivew-column-1">
            <p id="rating_title">Excellent</p>
            <p id="rating_star">★★★★★</p>
            <p id="review_subtitle">
              Based on <b>40+</b> Reviews
            </p>
            <img
              src="img\reviews\google_logo.png"
              alt="google logo"
              id="google_logo"
            />
          </div>
          <div class="col-sm-12 col-md-10" id="review-column-2">
            <Carousel
              id="reviewCarousel"
              responsive={responsive}
              showDots={false}
              infinite={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {props.data
                ? props.data.map((d, i) => {
                    const contentFull = d.Content;
                    const contentPreview = d.Content.split(" ")
                      .slice(0, 30)
                      .join(" ");
                    return (
                      <div
                        key={`${d.reviewerName}-${i}`}
                        className="reviewUnit"
                      >
                        <div className="reviewHead">
                          <img className="reviewerIcon" src={d.Icon} />
                          <div>
                            <b className="reviewerName">{d.Name}</b>
                            <p id="reviewDate">{d.Date}</p>
                          </div>
                        </div>
                        <div className="reviewContent">
                          <p className="reviewStar">{d.Star}</p>
                          <p>
                            {showMore ? contentFull : `${contentPreview}...`}
                          </p>
                          <p>
                            <span
                              onClick={toggleShowMore}
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              {showMore ? " Show less" : " Show more"}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })
                : "Loading..."}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
