import React from "react";
export const Special = (props) => {
  return (
    <div id="special" className="text-center">
      <div className="container" id="special_container">
        <div className="section-title">
          <h2 id="special_title">Special Deals</h2>
        </div>
        <div className="row" id="special_deal">
          <span>
            <a
              href="https://app.beautifi.com/auth/sign-in?callbackUrl=https%3A%2F%2Fapp.beautifi.com%2F%3Futm_source%3Dclinic%26utm_medium%3Dqr_code%26utm_campaign%3Dbeautifibrochure%26utm_content%3Dapplication"
              target="_blank"
              id="beautifiLogo"
            >
              <img src="img\beautifi\Beautifi.png" alt="beautifi logo" />
            </a>
            <img
              src="img\beautifi\BeautifiQR.png"
              alt="beautifi QR code"
              id="beautifiQR"
            />
          </span>
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
