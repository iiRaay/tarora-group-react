import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Microneedling from "./pages/Microneedling";
import Dermaplaning from './pages/Dermaplaning';
import Hydrafacial from './pages/HydraFacial';
import Microdermabrasion from './pages/Microdermabrasion ';
import BBGlow from './pages/BBGlow';
import Morpheus8 from './pages/Morpheus8';
import FormaRF from './pages/FormaRF';
import LumeccaIPL from './pages/LumeccaIPL';
import Lamination from './pages/Lamination';
import Threading from './pages/Threading';
import LaserHairRemoval from './pages/LaserHairRemoval';
import Waxing from './pages/Waxing'; 
import Dermalfillers from './pages/Dermalfillers';
import App from './App';

const router = createBrowserRouter([

    {path:"/", element: <App/>},
    {path:"/microneedling", element: <Microneedling/>},
    {path:"/dermaplaning", element: <Dermaplaning/>},
    {path:"/hydrafacial", element: <Hydrafacial/>},
    {path:"/microdermabrasion", element: <Microdermabrasion/>},
    {path:"/bbglow", element: <BBGlow/>},
    {path:"/morpheus8RF", element: <Morpheus8/>},
    {path:"/formaRF", element: <FormaRF/>},
    {path:"/lumeccaIPL", element: <LumeccaIPL/>},
    {path:"/lamination", element: <Lamination/>},
    {path:"/threading", element: <Threading/>},
    {path:"/laser-hair-removal", element: <LaserHairRemoval/>},
    {path:"/waxing", element: <Waxing/>},
    {path:"/dermal-fillers", element: <Dermalfillers/>}
]);


ReactDOM.render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
