import React from "react";
export const Special = (props) => {
  return (
    <div id="special" className="text-center">
      <div className="container" id="special_container">
        <div className="section-title">
          <h1 id="special_title">Special Deals</h1>
        </div>
        <div className="row" id="special_deal">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.treatment}-${i}`} className="special_item">
                  {" "}
                  <p id="special_treatment">{d.treatment}</p>
                  <p id="special_price">{d.price}</p>
                  <p id="special_caption">{d.caption}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
