import React, { useState } from "react";
import "./popup.css";
function Popup() {
  const [popupOpen, setPopup] = useState(true);

  const togglePopup = () => {
    setPopup(!popupOpen);
    console.log(popupOpen);
  };

  if (popupOpen) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  return (
    <div>
      {/*<button className="popup-button" onClick={togglePopup}>
          Open
        </button>
        */}

      {popupOpen && (
        <div className="popup">
          <div className="popup-overlay" onClick={togglePopup}></div>
          <div className="popup-content">
            <img src=".\img\popup.jpg" alt="" />
            <button className="popup-close-btn" onClick={togglePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
