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
            BB Glow is a semi-permanent facial treatment that involves
            microneedling a tinted serum into the skin to create a glowing, even
            complexion. The serum contains nourishing ingredients like vitamins,
            antioxidants, peptides, and a natural pigment that gives the skin a
            brightened, dewy appearance. The treatment is popular for its
            ability to reduce the appearance of imperfections and provide a
            subtle "foundation-like" effect without the need for makeup.
          </p>
          <h3>How BB Glow Works</h3>
          <ol className="part-a">
            <li>
              Cleansing and Exfoliation:
              <ul className="inner-a">
                <li>
                  The skin is thoroughly cleaned and exfoliated to remove dead
                  skin cells and prepare it for treatment.
                </li>
              </ul>
            </li>
            <li>
              Microneedling Application:
              <ul className="inner-a">
                <li>
                  A microneedling device is used to infuse the tinted BB Glow
                  serum into the epidermis (outer layer of the skin).
                </li>
              </ul>
            </li>
            <li>
              Nourishment and Pigmentation:
              <ul className="inner-a">
                <li>
                  The serum delivers active ingredients that hydrate and nourish
                  the skin while the pigment evens out skin tone.
                </li>
              </ul>
            </li>
            <li>
              Collagen Stimulation:
              <ul className="inner-a">
                <li>
                  The microneedling process stimulates collagen production,
                  improving skin texture and elasticity over time.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Benefits of BB Glow</h3>
          <ol className="part-a">
            <li>
              Evens Out Skin Tone:
              <ul className="inner-a">
                <li>
                  Reduces the appearance of hyperpigmentation, redness, and
                  uneven skin tone, leaving the skin looking brighter and more
                  uniform.
                </li>
              </ul>
            </li>
            <li>
              Minimizes Imperfections:
              <ul className="inner-a">
                <li>
                  Smoothens the appearance of fine lines, pores, and mild acne
                  scars.
                </li>
              </ul>
            </li>
            <li>
              Provides a Natural Glow:
              <ul className="inner-a">
                <li>
                  Leaves the skin with a radiant, dewy finish, mimicking the
                  effect of lightweight makeup or BB cream.
                </li>
              </ul>
            </li>
            <li>
              Hydrates and Nourishes:
              <ul className="inner-a">
                <li>
                  The serums used in BB Glow treatments contain hyaluronic acid,
                  vitamins, and antioxidants that deeply hydrate the skin.
                </li>
              </ul>
            </li>
            <li>
              Semi-Permanent Effect:
              <ul className="inner-a">
                <li>
                  Results last 4–6 months with proper skincare, reducing the
                  need for daily foundation application.
                </li>
              </ul>
            </li>
            <li>
              Non-Invasive:
              <ul className="inner-a">
                <li>
                  The procedure is gentle and requires minimal downtime compared
                  to more invasive skin treatments.
                </li>
              </ul>
            </li>
            <li>
              Customizable Shades:
              <ul className="inner-a">
                <li>
                  The pigment in the BB Glow serum can be adjusted to suit
                  different skin tones.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Why BB Glow is Good</h3>
          <ol className="part-a">
            <li>
              Time-Saving:
              <ul className="inner-a">
                <li>
                  Ideal for those who want a "woke-up-like-this" look without
                  daily makeup.
                </li>
              </ul>
            </li>
            <li>
              Enhances Confidence:
              <ul className="inner-a">
                <li>
                  Helps people feel more comfortable in their natural skin by
                  masking imperfections.
                </li>
              </ul>
            </li>
            <li>
              Versatile:
              <ul className="inner-a">
                <li>
                  Suitable for various skin concerns, including dullness,
                  pigmentation, and mild scarring.
                </li>
              </ul>
            </li>
            <li>
              Quick Results:
              <ul className="inner-a">
                <li>
                  Some improvement is visible immediately after the first
                  session, with full effects developing after a few treatments.
                </li>
              </ul>
            </li>
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
