import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const Microneedling = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">Microneedling</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            Microneedling, also known as collagen induction therapy, is a
            minimally invasive cosmetic procedure that involves creating tiny,
            controlled micro-injuries in the skin using fine needles. These
            micro-injuries stimulate the body's natural wound-healing processes,
            leading to skin rejuvenation. Here's how it works and why it's
            beneficial:
          </p>
          <h3>How Microneedling Works</h3>
          <ol className="part-a">
            <li>
              Improves Skin Texture and Tone:
              <ul className="inner-a">
                <li>Reduces the appearance of fine lines and wrinkles</li>
                <li>Smoothens uneven skin texture</li>
                <li>Minimizes the look of large pores</li>
              </ul>
            </li>
            <li>
              Reduces Scarring:
              <ul className="inner-a">
                <li>
                  Effective for acne scars, surgical scars, and stretch marks by
                  breaking down old scar tissue and encouraging new skin growth.
                </li>
              </ul>
            </li>
            <li>
              Fades Hyperpigmentation:
              <ul className="inner-a">
                <li>
                  Treats melasma, sunspots, and other forms of hyperpigmentation
                  by promoting even skin tone.
                </li>
              </ul>
            </li>
            <li>
              Improves Skin Firmness and Elasticity:
              <ul className="inner-a">
                <li>
                  Counteracts sagging skin and provides a firmer, more youthful
                  appearance.
                </li>
              </ul>
            </li>
            <li>
              Minimally Invasive with Low Downtime:
              <ul className="inner-a">
                <li>
                  Unlike more aggressive procedures like lasers or chemical
                  peels, microneedling is gentler on the skin with quicker
                  recovery times.
                </li>
              </ul>
            </li>
            <li>
              Suitable for Most Skin Types:
              <ul className="inner-a">
                <li>
                  Safe for a wide range of skin tones and conditions, as it does
                  not use heat or light, reducing the risk of hyperpigmentation
                  or burns.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Why Microneedling is Good</h3>
          <ol className="part-a">
            <li>
              Natural Healing:
              <ul className="inner-a">
                <li>
                  It works by enhancing the skin’s natural processes rather than
                  relying on synthetic chemicals or invasive surgery.
                </li>
              </ul>
            </li>
            <li>
              Customizable:
              <ul className="inner-a">
                <li>
                  The depth of the needles can be adjusted based on the area
                  being treated and the skin’s needs.
                </li>
              </ul>
            </li>
            <li>
              Cost-Effective:
              <ul className="inner-a">
                <li>
                  Compared to other cosmetic procedures like lasers or fillers,
                  microneedling is typically more affordable with comparable
                  benefits for skin rejuvenation.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Considerations</h3>
          <ol className="part-a">
            <li>
              <ul className="inner-a">
                <li>
                  Results are not immediate; they typically appear over several
                  weeks as the skin heals and new collagen forms.
                </li>
                <li>
                  Multiple sessions (3–6) may be needed for optimal results,
                  depending on the specific skin concerns being addressed.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="page-other">
          <img
            src="./img/before_after/microneedling.jpeg"
            alt="Microneedling Before and After"
          />
          <div className="prices">
            <h3>prices</h3>
            <ul>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/1">
                  Face
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/29">
                  Face & Neck
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

export default Microneedling;
