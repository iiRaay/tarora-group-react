import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/dropdown";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="./#page-top">
            <img src="../../logo-bw-black.png" alt="Logo" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              {/* <a href="#features" className="page-scroll">
                Treatments
              </a> */}
              {/* <Link to="/treatments">Treatments</Link> */}

              <a>
                <Dropdown />
              </a>
            </li>
            <li>
              <a href="./#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              {/*
                <a href="#services" className="page-scroll">
                  Services
                </a>
              */}
            </li>
            <li>
              <a href="./#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="./#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="./#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://ca.alumiermd.com/collections/all?code=5677059C"
                target="_blank"
              >
                Products
              </a>
            </li>
            <li>
              <a href="https://tarorarejuvenation.janeapp.com/" target="_blank">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
