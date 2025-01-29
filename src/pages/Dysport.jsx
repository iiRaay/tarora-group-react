import React from "react";
import { Navigation } from "../components/navigation";

import "./pages.css";

const Dysport = () => {
  return (
    <div className="page-container">
      <Navigation></Navigation>
      <h2 className="page-title">Dysport</h2>
      <div className="inner-container">
        <div className="page-text">
          <p>
            Botox is a popular cosmetic treatment derived from botulinum toxin,
            a purified protein that temporarily relaxes muscles by blocking
            nerve signals. It's primarily used to reduce the appearance of fine
            lines and wrinkles but also has various medical applications.
          </p>
          <h3>How Botox Works</h3>
          <ol className="part-a">
            <li>
              Muscle Relaxation:
              <ul className="inner-a">
                <li>
                  Botox is injected into targeted muscles, causing temporary
                  relaxation by blocking the release of acetylcholine, a
                  neurotransmitter that signals muscles to contract.
                </li>
              </ul>
            </li>
            <li>
              Smoothing Wrinkles:
              <ul className="inner-a">
                <li>
                  By reducing muscle activity, Botox softens dynamic
                  wrinkles—those caused by repetitive facial expressions like
                  frowning, squinting, or raising eyebrows.
                </li>
              </ul>
            </li>
            <li>
              Prevention of New Wrinkles:
              <ul className="inner-a">
                <li>
                  Prevents the deepening or formation of new wrinkles by
                  limiting excessive facial movements.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Cosmetic Benefits of Botox</h3>
          <ol className="part-a">
            <li>
              Reduces Fine Lines and Wrinkles:
              <ul className="inner-a">
                <li>
                  Targets crow’s feet, forehead lines, frown lines (glabellar
                  lines), and other dynamic wrinkles.
                </li>
              </ul>
            </li>
            <li>
              Lifts and Shapes:
              <ul className="inner-a">
                <li>
                  Can be used for subtle facial contouring, like lifting the
                  eyebrows or softening a gummy smile.
                </li>
              </ul>
            </li>
            <li>
              Prevents Premature Aging:
              <ul className="inner-a">
                <li>
                  Regular treatments can delay the formation of deeper wrinkles,
                  acting as a preventative measure.
                </li>
              </ul>
            </li>
            <li>
              Quick and Convenient:
              <ul className="inner-a">
                <li>
                  Sessions are typically short (10–20 minutes) with no
                  significant downtime, making it easy to fit into a busy
                  schedule.
                </li>
              </ul>
            </li>
            <li>
              Natural-Looking Results:
              <ul className="inner-a">
                <li>
                  Botox maintains natural facial expressions while reducing
                  signs of aging.
                </li>
              </ul>
            </li>
          </ol>
          <h3>Medical Benefits of Botox</h3>
          <ol className="part-a">
            <li>
              Treats Chronic Migraines:
              <ul className="inner-a">
                <li>
                  Reduces the frequency and severity of migraines by relaxing
                  muscles and decreasing nerve activation.
                </li>
              </ul>
            </li>
            <li>
              Manages Excessive Sweating (Hyperhidrosis):
              <ul className="inner-a">
                <li>
                  Blocks sweat glands in areas like the underarms, palms, or
                  soles of the feet.
                </li>
              </ul>
            </li>
            <li>
              Eases Muscle Spasms:
              <ul className="inner-a">
                <li>
                  Helps with conditions like cervical dystonia (neck spasms) or
                  blepharospasm (eyelid twitching).
                </li>
              </ul>
            </li>
            <li>
              Improves TMJ and Jaw Pain:
              <ul className="inner-a">
                <li>
                  Relieves jaw tension and reduces teeth grinding (bruxism) by
                  relaxing overactive jaw muscles.
                </li>
              </ul>
            </li>
            <li>
              Aids Overactive Bladder:
              <ul className="inner-a">
                <li>Helps reduce urinary incontinence in certain cases.</li>
              </ul>
            </li>
          </ol>
          <h3>Why Botox is Good</h3>
          <ol className="part-a">
            <li>
              Boosts Confidence:
              <ul className="inner-a">
                <li>
                  Enhances facial aesthetics, helping individuals feel more
                  youthful and refreshed.
                </li>
              </ul>
            </li>
            <li>
              Minimally Invasive:
              <ul className="inner-a">
                <li>
                  A non-surgical alternative to procedures like facelifts, with
                  little to no recovery time.
                </li>
              </ul>
            </li>
            <li>
              Customizable Results:
              <ul className="inner-a">
                <li>
                  Doses and injection sites can be tailored to individual needs,
                  whether for a subtle or more pronounced effect.
                </li>
              </ul>
            </li>
            <li>
              Affordable and Accessible:
              <ul className="inner-a">
                <li>
                  Compared to surgical options, Botox is relatively affordable
                  and widely available.
                </li>
              </ul>
            </li>
            <li>
              Dual Benefits:
              <ul className="inner-a">
                <li>
                  Offers both cosmetic and therapeutic advantages, improving
                  appearance and addressing medical concerns.
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
                  Effects last 3–6 months, requiring regular maintenance for
                  sustained benefits.
                </li>
              </ul>
            </li>
            <li>
              Mild Side Effects:
              <ul className="inner-a">
                <li>
                  Possible bruising, swelling, or mild discomfort at injection
                  sites, which typically resolves within a few days.
                </li>
              </ul>
            </li>
            <li>
              Not Suitable for All:
              <ul className="inner-a">
                <li>
                  Pregnant or breastfeeding individuals and those with certain
                  neuromuscular conditions should avoid Botox.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/*--- Right half of page ---*/}
        <div className="page-other">
          {/*
          <img
            src="./img/before_after/botox.jpg"
            alt="Dysport Before and After"
          />
          */}
          <div className="prices">
            <h3>Call to Book</h3>
            <ul>
              <li>
                <a href="https://www.google.ca/search?q=tarora+rejuvenation">
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

export default Dysport;
