import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const BBGlow = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">BB Glow</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            Get a natural, radiant glow with our BB Glow treatment! It uses a
            special serum with naturally sourced pigments, peptides, and
            vitamins that are infused into your skin using nano needle
            technology. This treatment provides light to medium coverage to help
            reduce blemishes, dark spots, redness, and under-eye circles, while
            the peptides and vitamins work to support healthy skin! The pigments
            are perfectly matched to your skin tone to achieve a bright, and
            even complexion for a semi-permanent “foundation-like” look.
          </p>
          <h3>How BB Glow Works</h3>
          <p>
            Product is infused into the outer layer of the skin (epidermis)
            using a nano needle. The pigments and nutrients are then absorbed by
            the skin to create a supple, ‘glowy’ complexion.
          </p>
          <h3>What are the Benefits?</h3>
          <ol className="part-b">
            <ul className="inner-a">
              <li>Even skin tone </li>
              <li>Smooths appearance of skin</li>
              <li>Minimize the appearance of pores</li>
              <li>Lightens hyperpigmentation</li>
              <li>Non-invasive </li>
              <li>Customizable shades</li>
              <li>Time saving + Quick results</li>
            </ul>
          </ol>
          <h3>Why BB Glow is Good</h3>
          <ol className="part-b">
            <ul className="inner-a">
              <li>Short Downtime (48-72h)</li>
              <li>Immediate Results</li>
              <li>
                Only 1-3 treatments needed (2-3 weeks in-between each treatment)
              </li>
            </ul>
          </ol>
          <h3>Considerations</h3>
          <ol className="part-a">
            <li>
              Temporary Results:
              <ul className="inner-a">
                <li>
                  The treatment is semi-permanent and may require maintenance
                  sessions to prolong the effect.
                </li>
              </ul>
            </li>
            <li>
              Not a Replacement for Skincare:
              <ul className="inner-a">
                <li>
                  While BB Glow improves the skin's appearance, it doesn't treat
                  underlying skin conditions like acne or deep pigmentation.
                </li>
              </ul>
            </li>
            <li>
              Mild Side Effects:
              <ul className="inner-a">
                <li>
                  Redness or slight irritation may occur immediately after the
                  procedure but typically subsides within a day or two.
                </li>
              </ul>
            </li>
            <li>
              Skin Type Limitations:
              <ul className="inner-a">
                <li>
                  Individuals with active acne, sensitive skin, or certain skin
                  conditions should book a consult before booking the treatment.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/*--- Right half of page ---*/}
        <div className="page-other">
          {/*
          <img
            src="./img/before_after/dermplaning.jpg"
            alt="BB GLow Before and After"
          />
          */}
          <div className="prices">
            <h3>Call to Book</h3>
            <ul>
              <li>
                <a href="https://www.google.com/search?q=tarora+rejuvenation">
                  (403) 910-1741
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

export default BBGlow;
