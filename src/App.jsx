import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Special } from "./components/special";
import { Reviews } from "./components/reviews";
import Popup from "./components/Popup/popup";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <SpeedInsights />
      <Navigation />
      <Header data={landingPageData.Header} />
      {/*<Popup />*/}
      <Special data={landingPageData.Special} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/*<Services data={landingPageData.Services} />*/}
      <Reviews data={landingPageData.Review} />
      <BeforeAfter data={landingPageData.BeforeAfter} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
