import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 update
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Microneedling from "./pages/Microneedling";
import Dermaplaning from "./pages/Dermaplaning";
import Hydrafacial from "./pages/HydraFacial";
import Microdermabrasion from "./pages/Microdermabrasion"; // ✅ Fixed extra space
import BBGlow from "./pages/BBGlow";
import Morpheus8 from "./pages/Morpheus8";
import FormaRF from "./pages/FormaRF";
import LumeccaIPL from "./pages/LumeccaIPL";
import Lamination from "./pages/Lamination";
import Threading from "./pages/Threading";
import LaserHairRemoval from "./pages/LaserHairRemoval";
import Waxing from "./pages/Waxing";
import Dermalfillers from "./pages/Dermalfillers";
import Botox from "./pages/Botox";
import Dysport from "./pages/Dysport";
import Xeomin from "./pages/Xeomin";
import Massage from "./pages/Massage";
import RouteWithAnalytics from "./components/RouteWithAnalytics";
import { initGA } from "./analytics";

initGA();

const addAnalytics = (element) => (
  <RouteWithAnalytics>{element}</RouteWithAnalytics>
);

const router = createBrowserRouter([
  { path: "/", element: addAnalytics(<App />) },
  { path: "/microneedling", element: addAnalytics(<Microneedling />) },
  { path: "/dermaplaning", element: addAnalytics(<Dermaplaning />) },
  { path: "/hydrafacial", element: addAnalytics(<Hydrafacial />) },
  { path: "/microdermabrasion", element: addAnalytics(<Microdermabrasion />) },
  { path: "/bbglow", element: addAnalytics(<BBGlow />) },
  { path: "/morpheus8RF", element: addAnalytics(<Morpheus8 />) },
  { path: "/formaRF", element: addAnalytics(<FormaRF />) },
  { path: "/lumeccaIPL", element: addAnalytics(<LumeccaIPL />) },
  { path: "/lamination", element: addAnalytics(<Lamination />) },
  { path: "/threading", element: addAnalytics(<Threading />) },
  { path: "/laser-hair-removal", element: addAnalytics(<LaserHairRemoval />) },
  { path: "/waxing", element: addAnalytics(<Waxing />) },
  { path: "/dermal-fillers", element: addAnalytics(<Dermalfillers />) },
  { path: "/botox", element: addAnalytics(<Botox />) },
  { path: "/dysport", element: addAnalytics(<Dysport />) },
  { path: "/xeomin", element: addAnalytics(<Xeomin />) },
  { path: "/massage", element: addAnalytics(<Massage />) },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
