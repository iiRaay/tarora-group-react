import React, { useState, useEffect, useRef } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ id: null });
  const [selectedId, setSelectedId] = useState(null);

  const ref = useRef(null);

  // This useEffect will handle the case where the dropdown is open, but you click away
  useEffect(() => {
    function handler(e) {
      if (ref.current) {
        if (!ref.current.contains(e.target)) {
          setIsSelected(false);
        }
      }
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // Represents the inital drop down options.
  const options = [
    {
      id: 1,
      label: "Skin Care & Rejuvenation",
      submenu: [
        { label: "BB Glow", link: "/bbglow" },
        { label: "Dermaplaning", link: "/dermaplaning" },
        { label: "Hydrafacial", link: "/hydrafacial" },
        { label: "Lamination", link: "/lamination" },
        { label: "Massage", link: "/massage" },
        { label: "Microdermabrasion", link: "/microdermabrasion" },
        { label: "Microneedling", link: "/microneedling" },
        { label: "Threading", link: "/threading" },
      ],
    },
    {
      id: 2,
      label: "Injectable",
      submenu: [
        { label: "Botox", link: "/botox" },
        { label: "Dermal Fillers", link: "/dermal-fillers" },
        { label: "Dysport", link: "/dysport" },
        { label: "Xeomin", link: "/xeomin" },
      ],
    },
    {
      id: 3,
      label: "Laser & Hair Removal",
      submenu: [
        { label: "Laser Hair Removal", link: "/laser-hair-removal" },
        { label: "Waxing", link: "/waxing" },
      ],
    },
    {
      id: 4,
      label: "Advance Skincare & Rejuvenation",
      submenu: [
        { label: "Forma RF Skin Tightening Facial", link: "/formaRF" },
        { label: "Lumecca IPL Facial", link: "/lumeccaIPL" },
        { label: "Morpheus 8", link: "/morpheus8RF" },
      ],
    },
  ];

  return (
    <div className="dropdown" ref={ref}>
      <li
        className="toggle"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        Treatments
      </li>
      {isSelected ? (
        <div className={`options ${isSelected ? "visible" : ""}`}>
          {options.map((option, index) => {
            return (
              <div className="dropdown-content">
                <li
                  key={option}
                  id={index}
                  // use this if u want, not needed really.
                  className={"drop-selected"}
                  onClick={() => {
                    setSelectedId(index);
                  }}
                >
                  {option.label}
                </li>
                {selectedId === index ? (
                  <>
                    <ul className="submenu">
                      {option.submenu.map((subOption, index) => {
                        return (
                          <li
                            // use this if u want, not needed really.
                            className={`${
                              selectedOption.id === subOption.id
                                ? "sub-selected"
                                : ""
                            }`}
                            onClick={(e) => {
                              setSelectedOption(subOption);
                            }}
                          >
                            <div className="submenu-content">
                              {
                                <Link to={subOption.link}>
                                  {subOption.label}
                                </Link>
                              }
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
