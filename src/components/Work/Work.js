import React, { useState } from "react";
import work from "../../assets/work.jpg";
import group from "../../assets/group.jpg";
import workshop from "../../assets/workshop.jpg";
import "./Work.css";
import OneToOne from "./OneToOne/OneToOne";
import Group from "./Group/Group";
import Coaching from "./Coaching/Coaching";

function Work() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeButton, setActiveButton] = useState("oneToOne");

  const handleButtonClick = (button) => {
    if (button === activeButton) {
      setActiveButton(null);
      setActiveComponent(null);
    } else {
      setActiveButton(button);
      switch (button) {
        case "oneToOne":
          setActiveComponent(<OneToOne />);
          break;
        case "group":
          setActiveComponent(<Group />);
          break;
        case "coaching":
          setActiveComponent(<Coaching />);
          break;
        default:
          setActiveComponent(null);
      }
    }
  };

  const buttonClass = (button) =>
    button === activeButton ? "custom_button1 active" : "custom_button2";

  return (
    <div className="work-section">
      <div className="work-header">
        <h1 className="work-title">Cum vom lucra impreuna?</h1>
        <p className="work-text">
          Te voi ajuta sa identifici cea mai buna optiune in functie de nevoile
          tale. Mai jos poti regasi detalii pentru fiecare in parte.
        </p>
      </div>
      <div className="buttons-wrapper">
        <div className="buttons-section">
          <button
            onClick={() => handleButtonClick("oneToOne")}
            className={buttonClass("oneToOne")}
          >
            One-to-one
          </button>
          <button
            onClick={() => handleButtonClick("group")}
            className={buttonClass("group")}
          >
            Group
          </button>
          <button
            onClick={() => handleButtonClick("coaching")}
            className={buttonClass("coaching")}
          >
            Executive Coaching
          </button>
        </div>
        {activeComponent}
      </div>
    </div>
  );
}

export default Work;
