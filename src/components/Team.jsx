import React, { useState, useEffect } from "react";

export const Team = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>Meet the passionate minds driving our success.</p>
        </div>
        <div id="row" className="row">
          {props.data
            ? props.data.map((d, i) => {
                const bioPreview = d.bio.split(" ").slice(0, 20).join(" ");
                const fullBio = d.bio;

                return (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                        <p className={showMore ? "full-bio" : "bio-preview"}>
                          {showMore ? fullBio : `${bioPreview}...`}
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
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};
