import React, { useState, useEffect, useRef } from "react";
import "./dropdown.css";

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
        { label: "Microneedling" },
        { label: "Dermaplaning" },
        { label: "Hydrafacial" },
        { label: "Acne Solutions Facial" },
        { label: "Chemical Peel" },
        { label: "Tarora Restore & Rejuvenate" },
        { label: "Eyebrow Tinting" },
        { label: "Eyebrow Lamination" },
      ],
    },
    {
      id: 2,
      label: "Injectable",
      submenu: [{ label: "Botox" }, { label: "Dermal Fillers" }],
    },
    {
      id: 3,
      label: "Laser & Hair Removal",
      submenu: [
        { label: "Threading" },
        { label: "Laser Hair Removal" },
        { label: "Waxing" },
      ],
    },
    {
      id: 4,
      label: "Advance Skincare & Rejuvenation",
      submenu: [
        { label: "Morpheus 8" },
        { label: "Lumecca IPL Facial" },
        { label: "Forma RF Skin Tightening Facial" },
      ],
    },
  ];

  // const toggleSubMenu = (e) => {
  //   console.log(e);
  //   let submenu = e.target.querySelector("li");
  //   console.log(submenu);
  //   if (!submenu) return;
  //   if (submenu.style.display === "none") {
  //     submenu.style.display = "block";
  //   } else {
  //     submenu.style.display = "none";
  //   }
  // };

  function handleOnClick(item) {
    item.isOpen = !item.isOpen;
    // let submenu = e.target;

    // if (!submenu) return;

    // submenu.style.display = "none";
    // console.log(submenu.style.display);
    /*
    if (submenu.style.display === "none") {
    } else {
      submenu.style.display = "none";
    }
    */
  }
  const RenderSubMenu = (option) => {
    console.log(option.isOpen);
    return (
      <>
        {option.isOpen ? (
          <ul className="submenu">
            {option.submenu.map((subOption, index) => {
              return (
                <li
                  // use this if u want, not needed really.
                  className={`${
                    selectedOption.id === subOption.id ? "selected" : ""
                  }`}
                  onClick={(e) => {
                    setSelectedOption(subOption);
                    //toggleSubMenu(e);
                  }}
                >
                  {subOption.label}
                </li>
              );
            })}
          </ul>
        ) : null}
      </>
    );
  };

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="toggle"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        Treatments
      </button>
      {isSelected ? (
        <div className={`options ${isSelected ? "visible" : ""}`}>
          {options.map((option, index) => {
            return (
              <div>
                <li
                  key={option}
                  id={index}
                  // use this if u want, not needed really.
                  className={`${
                    selectedOption.id === option.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedId(index);
                  }}
                >
                  {option.label}
                </li>

                {selectedId == index ? (
                  <>
                    <ul className="submenu">
                      {option.submenu.map((subOption, index) => {
                        return (
                          <li
                            // use this if u want, not needed really.
                            className={`${
                              selectedOption.id === subOption.id
                                ? "selected"
                                : ""
                            }`}
                            onClick={(e) => {
                              setSelectedOption(subOption);
                            }}
                          >
                            {subOption.label}
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
