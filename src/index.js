import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Treatments from "./pages/Treatments";
import App from './App';

const router = createBrowserRouter([

    {path:"/", element: <App/>},
    {path:"/treatments", element: <Treatments/>}
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
