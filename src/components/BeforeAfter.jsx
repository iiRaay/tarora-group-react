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
/*
const baitemData = [
  {
    id: 1,
    imagepath: "img/before_after/stock.jpg",
    name: "treatment1",
  },
  {
    id: 2,
    imagepath: "img/before_after/stock.jpg",
    name: "treatment2",
  },
  {
    id: 3,
    imagepath: "img/before_after/stock.jpg",
    name: "treatment3",
  },
  {
    id: 4,
    imagepath: "img/before_after/stock.jpg",
    name: "treatment4",
  },
];
*/
// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="left-arrow"
      onClick={onClick}
      id="left-arrow1"
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
      id="right-arrow1"
      aria-label="Next Slide"
    >
      &#11166; {/*Black Rightwards Equilateral Arrowhead html code*/}
    </button>
  );
};

/*Map carousel item img(imagepath)and caption(name) from baitemData array to pass into carousel */
/*
const carouselItem = baitemData.map((item) => (
  <BAitem name={item.name} imgPath={item.imagepath} />
));
*/
export const BeforeAfter = (props) => {
  return (
    <div className="text-center" id="BAContainer">
      <div className="section-title">
        <h2 id="BAtitle">Before & After</h2>
      </div>
      <div className="container" id="BACarousel">
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {props.data
            ? props.data.map((d, i) => {
                return (
                  <div key={`${d.id}-${i}`} className="carousel-slide">
                    <div className="carousel-image" aria-label={d.aria}>
                      <img src={d.baImg} alt="stock" />
                    </div>
                    <p id="carousel-caption">{d.baName}</p>
                  </div>
                );
              })
            : "Loading..."}
        </Carousel>
      </div>
    </div>
  );
};
