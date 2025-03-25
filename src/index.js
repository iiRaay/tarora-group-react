import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18 update
import './index.css';
import * as serviceWorker from './serviceWorker';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Microneedling from "./pages/Microneedling";
import Dermaplaning from './pages/Dermaplaning';
import Hydrafacial from './pages/HydraFacial';
import Microdermabrasion from './pages/Microdermabrasion'; // ✅ Fixed extra space
import BBGlow from './pages/BBGlow';
import Morpheus8 from './pages/Morpheus8';
import FormaRF from './pages/FormaRF';
import LumeccaIPL from './pages/LumeccaIPL';
import Lamination from './pages/Lamination';
import Threading from './pages/Threading';
import LaserHairRemoval from './pages/LaserHairRemoval';
import Waxing from './pages/Waxing'; 
import Dermalfillers from './pages/Dermalfillers';
import Botox from './pages/Botox';
import Dysport from './pages/Dysport';
import Xeomin from './pages/Xeomin';
import Massage from './pages/Massage';

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/microneedling", element: <Microneedling /> },
    { path: "/dermaplaning", element: <Dermaplaning /> },
    { path: "/hydrafacial", element: <Hydrafacial /> },
    { path: "/microdermabrasion", element: <Microdermabrasion /> },
    { path: "/bbglow", element: <BBGlow /> },
    { path: "/morpheus8RF", element: <Morpheus8 /> },
    { path: "/formaRF", element: <FormaRF /> },
    { path: "/lumeccaIPL", element: <LumeccaIPL /> },
    { path: "/lamination", element: <Lamination /> },
    { path: "/threading", element: <Threading /> },
    { path: "/laser-hair-removal", element: <LaserHairRemoval /> },
    { path: "/waxing", element: <Waxing /> },
    { path: "/dermal-fillers", element: <Dermalfillers /> },
    { path: "/botox", element: <Botox /> },
    { path: "/dysport", element: <Dysport /> },
    { path: "/xeomin", element: <Xeomin /> },
    { path: "/massage", element: <Massage /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SpeedInsights />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
