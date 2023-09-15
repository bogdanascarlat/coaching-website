import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OneToOne from "./OneToOne/OneToOne";
import Group from "./Group/Group";
import Coaching from "./Coaching/Coaching";

import { useTranslation } from "react-i18next";

const Solutions = () => {
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

  const { t } = useTranslation(["solutions"]);

  return (
    <div>
      <Navbar />
      <div className="mt-[7.5rem] mb-[7.5rem]">
        <div className="mb-3">
          <h1 className="sliding-paragraph mb-3 text-center text-4xl font-bold">
            {t("solutions:wewillidentifythebestcustomizedsolutionsforyou")}
          </h1>
          <p className="mx-auto mt-5 w-1/2 items-center text-center text-2xl font-semibold">
            {t(
              "solutions:Iwillhelpyouidentifythebestoptionaccordingtoyourneedsbelowyoucanfinddetailsforeachone."
            )}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 rounded-2xl bg-[#ffe8cc]">
            <button
              onClick={() => handleButtonClick("oneToOne")}
              class={buttonClass("oneToOne")}
            >
               {t("solutions:onetoone")}
            </button>
            <button
              onClick={() => handleButtonClick("group")}
              class={buttonClass("group")}
            >
              {t("solutions:group")}
            </button>
            <button
              onClick={() => handleButtonClick("coaching")}
              class={buttonClass("coaching")}
            >
             {t("solutions:coaching")}
            </button>
          </div>
          {activeComponent}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Solutions;
