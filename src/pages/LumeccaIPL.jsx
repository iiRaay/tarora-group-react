import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const LumeccaIPL = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">Lumecca IPL Facial</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            The Lumecca IPL Facial is an advanced light-based treatment that
            uses Intense Pulsed Light (IPL) technology to target a variety of
            skin concerns. It is particularly effective for improving skin tone,
            texture, and clarity. Lumecca is considered one of the most powerful
            IPL devices available, delivering high-intensity light energy to
            rejuvenate the skin and address issues like pigmentation, redness,
            and vascular lesions.
          </p>
          <h3>How Lumecca IPL Facial Works</h3>
          <ol className="part-a">
            <li>
              Light Energy Penetration:
              <ul className="inner-a">
                <li>
                  Lumecca delivers a broad spectrum of intense pulsed light into
                  the skin.
                </li>
                <li>
                  The light is absorbed by melanin (pigment) and hemoglobin
                  (blood vessels), causing them to break down.
                </li>
              </ul>
            </li>
            <li>
              Targeted Skin Concerns:
              <ul className="inner-a">
                <li>
                  The device selectively targets damaged skin cells without
                  harming surrounding tissues.
                </li>
              </ul>
            </li>
            <li>
              Stimulates Natural Healing:
              <ul className="inner-a">
                <li>
                  The treatment promotes collagen production and accelerates
                  cellular turnover, leading to clearer, more youthful-looking
                  skin.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Benefits of Lumecca IPL Facial:</h3>
          <ol className="part-a">
            <li>
              Reduces Hyperpigmentation:
              <ul className="inner-a">
                <li>
                  Effectively treats sunspots, age spots, and other forms of
                  discoloration.
                </li>
                <li>Evens out skin tone for a more radiant complexion.</li>
              </ul>
            </li>
            <li>
              Minimizes Redness:
              <ul className="inner-a">
                <li>
                  Reduces redness associated with rosacea, broken capillaries,
                  and spider veins.
                </li>
                <li>Helps diminish vascular lesions.</li>
              </ul>
            </li>
            <li>
              Improves Skin Texture:
              <ul className="inner-a">
                <li>
                  Enhances overall skin texture by promoting collagen
                  production, resulting in firmer and smoother skin.
                </li>
              </ul>
            </li>
            <li>
              Treats Sun Damage:
              <ul className="inner-a">
                <li>
                  Ideal for reversing the effects of UV exposure, such as
                  freckles, sunspots, and uneven pigmentation.
                </li>
              </ul>
            </li>
            <li>
              Non-Invasive:
              <ul className="inner-a">
                <li>
                  Requires no surgery or significant downtime, making it a
                  convenient option for busy lifestyles.
                </li>
              </ul>
            </li>
            <li>
              Fast and Effective:
              <ul className="inner-a">
                <li>
                  Sessions are typically quick, lasting about 20–30 minutes, and
                  improvements can often be seen after just one or two
                  treatments.
                </li>
              </ul>
            </li>
            <li>
              Long-Lasting Results:
              <ul className="inner-a">
                <li>
                  With proper skincare and sun protection, the results can last
                  for months, especially when combined with maintenance
                  treatments.
                </li>
              </ul>
            </li>
            <li>
              Customizable:
              <ul className="inner-a">
                <li>
                  With proper skincare and sun protection, the results can last
                  for months, especially when combined with maintenance
                  treatments.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Why Lumecca IPL is Good</h3>
          <ol className="part-a">
            <li>
              Precision:
              <ul className="inner-a">
                <li>
                  Targets specific pigmentation and vascular concerns without
                  affecting healthy skin.
                </li>
              </ul>
            </li>
            <li>
              Boosts Confidence:
              <ul className="inner-a">
                <li>
                  Improves skin clarity and brightness, leaving you with a
                  rejuvenated appearance.
                </li>
              </ul>
            </li>
            <li>
              Safe and Effective:
              <ul className="inner-a">
                <li>
                  Clinically proven to deliver results with minimal risk of side
                  effects when performed by a trained professional.
                </li>
              </ul>
            </li>
            <li>
              Versatile:
              <ul className="inner-a">
                <li>
                  Treats a wide range of skin issues, including age spots,
                  freckles, rosacea, spider veins, and overall sun damage.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Considerations</h3>
          <ol className="part-a">
            <li>
              Not for All Skin Types:
              <ul className="inner-a">
                <li>
                  While effective for many, individuals with darker skin tones
                  may need alternative treatments due to the risk of
                  hyperpigmentation, so we recommend you book a consult first.
                </li>
              </ul>
            </li>
            <li>
              Sun Protection is Crucial:
              <ul className="inner-a">
                <li>
                  After treatment, the skin is more sensitive to UV rays, so
                  sunscreen and sun avoidance are critical.
                </li>
              </ul>
            </li>
            <li>
              Mild Side Effects:
              <ul className="inner-a">
                <li>
                  Temporary redness, slight swelling, or darkening of
                  pigmentation may occur but typically resolve within a few
                  days.
                </li>
              </ul>
            </li>
            <li>
              Requires Multiple Sessions:
              <ul className="inner-a">
                <li>
                  While some results may be visible after one session, most
                  concerns require 2–3 treatments for optimal outcomes.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/*--- Right half of page ---*/}
        <div className="page-other">
          <img
            src="./img/before_after/lumeccaIPLFacial.jpeg"
            alt="Microneedling Before and After"
          />
          <div className="prices">
            <h3>Prices</h3>
            <ul>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/24">
                  Face
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/27">
                  Face & Neck
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/25">
                  Face, Neck & Decollette
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

export default LumeccaIPL;
