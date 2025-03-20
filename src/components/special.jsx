import React from "react";
export const Special = (props) => {
  return (
    <div id="special" className="text-center">
      <div className="container" id="special_container">
        <div className="section-title">
          <h2 id="special_title">Special Deals</h2>
        </div>
        <div className="row" id="special_deal">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.treatment}-${i}`}
                  className="special_item"
                  id={d.id}
                >
                  <p className="special_header">{d.header}</p>
                  <ul>
                    <li className="special_price">{d.price}</li>
                    <li className="special_sub">{d.sub}</li>
                  </ul>
                  <p className="special_terms">
                    <b className="special_bold">{d.bold}</b>
                    {d.terms}
                  </p>
                  <p id="special_caption">{d.caption}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
