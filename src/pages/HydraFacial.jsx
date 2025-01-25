import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const Hydrafacial = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">HydraFacial</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            HydraFacial is a non-invasive, multi-step skin treatment that uses a
            patented device to cleanse, exfoliate, extract impurities, and
            hydrate the skin. It's a popular facial procedure known for its
            ability to improve skin texture, tone, and overall health without
            downtime. The treatment is suitable for most skin types and can be
            customized to address specific concerns.
          </p>
          <h3>How HydraFacial Works</h3>
          <ol className="part-a">
            <li>
              Cleansing and Exfoliation:
              <ul className="inner-a">
                <li>
                  Removes dead skin cells and surface impurities to reveal a
                  fresh layer of skin.
                </li>
              </ul>
            </li>
            <li>
              Acid Peel:
              <ul className="inner-a">
                <li>
                  A gentle blend of glycolic and salicylic acids loosens debris
                  in the pores without irritation.
                </li>
              </ul>
            </li>
            <li>
              Extraction:
              <ul className="inner-a">
                <li>
                  The device uses a vacuum-like tip to painlessly extract
                  blackheads, whiteheads, and other impurities from the pores.
                </li>
              </ul>
            </li>
            <li>
              Hydration:
              <ul className="inner-a">
                <li>
                  Delivers a customized blend of serums, including antioxidants,
                  peptides, and hyaluronic acid, to nourish and hydrate the
                  skin.
                </li>
              </ul>
            </li>
            <li>
              Protection:
              <ul className="inner-a">
                <li>
                  Ends with a layer of protective serums to lock in moisture and
                  provide a radiant glow.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Benefits of HydraFacial</h3>
          <ol className="part-a">
            <li>
              Deep Cleansing and Exfoliation:
              <ul className="inner-a">
                <li>
                  Effectively removes dead skin cells, dirt, and oil that can
                  clog pores and dull the complexion.
                </li>
              </ul>
            </li>
            <li>
              Hydration and Nourishment:
              <ul className="inner-a">
                <li>
                  Infuses the skin with moisture and essential nutrients,
                  leaving it plump and dewy.
                </li>
              </ul>
            </li>
            <li>
              Improves Skin Texture and Tone:
              <ul className="inner-a">
                <li>
                  Reduces the appearance of fine lines, wrinkles, and
                  hyperpigmentation for a smoother, more even complexion.
                </li>
              </ul>
            </li>
            <li>
              Minimizes Pores:
              <ul className="inner-a">
                <li>
                  Helps unclog and shrink the appearance of pores, leaving the
                  skin refined.
                </li>
              </ul>
            </li>
            <li>
              Gentle and Non-Irritating:
              <ul className="inner-a">
                <li>
                  Unlike some chemical peels or abrasive treatments, HydraFacial
                  is gentle enough for sensitive skin and requires no downtime.
                </li>
              </ul>
            </li>
            <li>
              Customizable:
              <ul className="inner-a">
                <li>
                  Can be tailored to address specific skin concerns, such as
                  acne, dullness, or aging signs.
                </li>
              </ul>
            </li>
            <li>
              Immediate Results:
              <ul className="inner-a">
                <li>
                  Provides a noticeable glow and smoother skin immediately after
                  the treatment.
                </li>
              </ul>
            </li>
            <li>
              Boosts Confidence:
              <ul className="inner-a">
                <li>
                  Enhances overall skin health, giving you a rejuvenated and
                  youthful appearance.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Why HydraFacial is Good</h3>
          <ol className="part-a">
            <li>
              Versatility:
              <ul className="inner-a">
                <li>
                  Suitable for nearly all skin types and conditions, including
                  sensitive or acne-prone skin.
                </li>
              </ul>
            </li>
            <li>
              Quick and Convenient:
              <ul className="inner-a">
                <li>
                  The procedure typically takes 30–60 minutes, making it easy to
                  fit into a busy schedule.
                </li>
              </ul>
            </li>
            <li>
              No Downtime:
              <ul className="inner-a">
                <li>
                  You can return to your daily activities immediately after the
                  treatment.
                </li>
              </ul>
            </li>
            <li>
              Long-Term Benefits:
              <ul className="inner-a">
                <li>
                  With regular sessions, it can improve the skin's health over
                  time by addressing issues like hydration, aging, and
                  congestion.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Considerations</h3>
          <ol className="part-a">
            <li>
              Temporary Effects:
              <ul className="inner-a">
                <li>
                  While the glow is immediate, maintaining results often
                  requires regular treatments.
                </li>
              </ul>
            </li>
            <li>
              Cost:
              <ul className="inner-a">
                <li>
                  HydraFacials can be more expensive than traditional facials,
                  though many people find the benefits worth the investment.
                </li>
              </ul>
            </li>
            <li>
              Not Suitable for Certain Conditions:
              <ul className="inner-a">
                <li>
                  Individuals are recommended to book a consultation prior to
                  any service to ensure intended & maximum results.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/*--- Right half of page ---*/}
        <div className="page-other">
          <img
            src="./img/before_after/acneFacialSolutions.jpg"
            alt="Microneedling Before and After"
          />
          <img
            src="./img/before_after/hydrafacial.jpg"
            alt="Microneedling Before and After"
          />
          <div className="prices">
            <h3>Prices</h3>
            <ul>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/76">
                  Express Hydrafacial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/60">
                  Deluxe Hydrafacial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/61">
                  Platinum Hydrafacial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/76">
                  Eye Perk Hydrafacial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/79">
                  Lip Perk Hydrafacial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/62">
                  Teen Acne Facial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/63">
                  Custom Chemical Peel
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/64">
                  Tarora's Restore & Rejuvenate
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/65">
                  Acne Solutions Facial
                </a>
              </li>
              <li>
                <a href="https://tarorarejuvenation.janeapp.com/#/discipline/1/treatment/138">
                  Deep Cleanse Facial & Detoxifying Pore Treatment
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

export default Hydrafacial;
