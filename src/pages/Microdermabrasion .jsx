import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const Microdermabrasion = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">Microdermabrasion </h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            Microdermabrasion is a non-invasive skin resurfacing treatment that
            uses a device to exfoliate the top layer of dead skin cells,
            promoting the regeneration of healthier, smoother, and more radiant
            skin. It typically involves the use of fine crystals or a
            diamond-tipped wand to gently polish the skin, along with suction to
            remove debris and stimulate circulation.
          </p>
          <h3>Why Microdermabrasion is Good</h3>
          <ol className="part-a">
            <li>
              Exfoliation and Skin Renewal:
              <ul className="inner-a">
                <li>
                  It removes dead skin cells, unclogs pores, and promotes cell
                  turnover, resulting in a smoother, more even complexion.
                </li>
              </ul>
            </li>
            <li>
              Improves Skin Texture and Tone:
              <ul className="inner-a">
                <li>
                  Effective for reducing the appearance of fine lines, wrinkles,
                  hyperpigmentation, and acne scars, leaving skin looking
                  rejuvenated.
                </li>
              </ul>
            </li>
            <li>
              Boosts Product Absorption:
              <ul className="inner-a">
                <li>
                  By clearing away dead cells, it enhances the penetration and
                  efficacy of skincare products.
                </li>
              </ul>
            </li>
            <li>
              Non-Invasive with Minimal Downtime:
              <ul className="inner-a">
                <li>
                  It's a gentle, quick procedure that requires little to no
                  recovery time, making it ideal for those with busy schedules.
                </li>
              </ul>
            </li>
            <li>
              Stimulates Collagen Production:
              <ul className="inner-a">
                <li>
                  The process encourages collagen and elastin production, which
                  improves skin elasticity and firmness over time.
                </li>
              </ul>
            </li>
            <li>
              Suitable for Most Skin Types:
              <ul className="inner-a">
                <li>
                  Microdermabrasion is versatile and can be customized to suit
                  various skin concerns, making it safe for many individuals.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="page-other">
          {/*
            <img
            src="./img/before_after/microneedling.jpeg"
            alt="Microneedling Before and After"
          />
          */}

          <div className="prices">
            <h3>Select</h3>
            <ul>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/68">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          <p className="disclaimer">
            *Information is based on service from our trained professionals.
            Results may vary & a consultation is highly recommended for optimal
            results. If you have any questions or concerns after any and all
            services we recommend you contact us immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Microdermabrasion;
