import React, { useState } from "react";
import "./Work.css";
import OneToOne from "./OneToOne/OneToOne";
import Group from "./Group/Group";
import Coaching from "./Coaching/Coaching";

function Work() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

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
    button === activeButton && activeButton !== null
      ? "font-bold tracking-wide text-[#ffffff] bg-[#343a40] text-sm rounded-full py-2 px-4 focus:outline-none"
      : "font-bold tracking-wide bg-[#ffe8cc] text-[#343a40] text-sm rounded-full py-2 px-4 focus:outline-none";

  return (
    <div class="py-20 mt-96">
      <div class="mb-3">
        <h1 class="text-3xl font-bold mb-3 text-center">
          Cum vom lucra impreuna?
        </h1>
        <p class="text-center items-center text-2xl font-semibold w-1/2 mx-auto mt-5">
          Te voi ajuta sa identifici cea mai buna optiune in functie de nevoile
          tale. Mai jos poti regasi detalii pentru fiecare in parte.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="bg-[#ffe8cc] rounded-2xl mb-6">
          <button
            onClick={() => handleButtonClick("oneToOne")}
            class={buttonClass("oneToOne")}
          >
            One-to-one
          </button>
          <button
            onClick={() => handleButtonClick("group")}
            class={buttonClass("group")}
          >
            Group
          </button>
          <button
            onClick={() => handleButtonClick("coaching")}
            class={buttonClass("coaching")}
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
