import React from "react";

function BAitem(props) {
  return (
    <div className="carousel-slide">
      <div className="carousel-image">
        <img src={props.imgPath} alt="stock" />
        <img src={props.imgPath} alt="stock" />
      </div>
      <h3 id="carousel-caption">{props.name}</h3>
    </div>
  );
}

export default BAitem;
