import React from "react";
import balance from "../../assets/balance.jpg";

import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-[35rem] mt-10 md:mt-[15rem] sm:mt-10 xs:mt-[10re] w-[90%] mx-auto bg-[#343a40] sm:mb-[25rem] sm:mt-[10rem]">
      <div className="p-8 bg-[#343a40] text-white">
        <h1 className="text-4xl font-bold mb-6 bg-[#343a40]">
          {t("home:myvalues")}
        </h1>
        <ul className="text-lg leading-10 bg-[#343a40]">
          <li className="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:compassion")}
          </li>
          <li className="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:empathy")}
          </li>
          <li className="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:responsibility")}
          </li>
          <li className="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:respect")}
          </li>
          <li className="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:sincerity")}
          </li>
        </ul>
      </div>

      <div className="description-right-container">
        <img
          src={balance}
          alt="description img"
          className="w-full md:p-10 bg-[#343a40]"
        />
      </div>
    </div>
  );
};

export default Description;
