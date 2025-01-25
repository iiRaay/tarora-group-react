import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const Dermaplaning = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">Dermaplaning</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            Dermaplaning is a non-invasive cosmetic procedure that involves
            gently exfoliating the skin's surface using a sterile,
            surgical-grade blade. The process removes dead skin cells and fine
            vellus hair (commonly referred to as "peach fuzz"), leaving the skin
            smoother and brighter. It is performed by a trained professional.
          </p>
          <h3>How Dermaplaning Works</h3>
          <ol className="part-a">
            <li>
              Exfoliation:
              <ul className="inner-a">
                <li>
                  The blade is used to gently scrape off the outermost layer of
                  dead skin cells.
                </li>
              </ul>
            </li>
            <li>
              Hair Removal:
              <ul className="inner-a">
                <li>
                  Simultaneously removes fine facial hair that can trap dirt,
                  oil, and makeup.
                </li>
              </ul>
            </li>
            <li>
              Skin Smoothing:
              <ul className="inner-a">
                <li>
                  Enhances the skin's texture by creating a silky-smooth
                  surface.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Benefits of Dermaplaning</h3>
          <ol className="part-a">
            <li>
              Smoother Skin Texture:
              <ul className="inner-a">
                <li>
                  Creates a smooth canvas for makeup application, allowing
                  foundation and other products to glide on seamlessly.
                </li>
                <li>Leaves the skin feeling soft and velvety.</li>
              </ul>
            </li>
            <li>
              Immediate Brightening Effect:
              <ul className="inner-a">
                <li>
                  By removing dull, dead skin cells, the skin looks instantly
                  brighter and more radiant.
                </li>
                <li>Enhances the natural glow of the skin.</li>
              </ul>
            </li>
            <li>
              Improves Product Absorption:
              <ul className="inner-a">
                <li>
                  Clears away surface barriers (dead skin and hair), enabling
                  skincare products to penetrate more effectively.
                </li>
              </ul>
            </li>
            <li>
              Non-Invasive and Painless:
              <ul className="inner-a">
                <li>
                  Requires no downtime and is painless when performed correctly.
                </li>
                <li>
                  Suitable for people with sensitive skin or those who cannot
                  tolerate chemical exfoliants.
                </li>
              </ul>
            </li>
            <li>
              Reduces Appearance of Fine Lines:
              <ul className="inner-a">
                <li>
                  Improves the look of fine lines and superficial wrinkles by
                  exfoliating the outer layer of the skin.
                </li>
              </ul>
            </li>
            <li>
              Minimizes Acne Scarring and Uneven Skin Tone:
              <ul className="inner-a">
                <li>
                  Smoothens the texture of mild acne scars and helps reduce
                  hyperpigmentation over time.
                </li>
              </ul>
            </li>
            <li>
              Safe for Most Skin Types:
              <ul className="inner-a">
                <li>
                  Dermaplaning can benefit nearly all skin types, except those
                  with active acne, rosacea, or highly sensitive skin.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Why Dermaplaning is Good</h3>
          <ol className="part-a">
            <li>
              Instant Results:
              <ul className="inner-a">
                <li>
                  Offers noticeable improvements in skin smoothness and
                  brightness immediately after the treatment.
                </li>
              </ul>
            </li>
            <li>
              Non-Aggressive:
              <ul className="inner-a">
                <li>
                  Unlike chemical peels or laser treatments, dermaplaning is
                  gentle and poses minimal risk of irritation.
                </li>
              </ul>
            </li>
            <li>
              No Harsh Chemicals:
              <ul className="inner-a">
                <li>
                  Ideal for those seeking a natural approach to exfoliation or
                  who have allergies to certain skincare products.
                </li>
              </ul>
            </li>
            <li>
              Versatile:
              <ul className="inner-a">
                <li>
                  Can be combined with other facial treatments like hydrating
                  masks or serums to enhance results.
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
                  The effects of dermaplaning typically last 3–4 weeks as the
                  skin naturally regenerates.
                </li>
              </ul>
            </li>
            <li>
              Not Ideal for Everyone:
              <ul className="inner-a">
                <li>
                  Individuals with active acne or inflamed skin should book a
                  consult before booking a treatment to avoid aggravating
                  current skin conditions.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/*--- Right half of page ---*/}
        <div className="page-other">
          <img
            src="./img/before_after/dermplaning.jpg"
            alt="Microneedling Before and After"
          />
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

export default Dermaplaning;
