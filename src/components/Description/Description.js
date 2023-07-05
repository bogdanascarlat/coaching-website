import React from "react";
import balance from "../../assets/balance.jpg";

import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="mt-[6rem] grid grid-cols-1 gap-4 bg-[#343a40] md:grid-cols-2">
      <div className="bg-[#343a40] p-8 text-white">
        <h1 className="mb-6 bg-[#343a40] text-4xl font-bold">
          {t("home:myvalues")}
        </h1>
        <ul className="bg-[#343a40] text-lg leading-10">
          <li className="mb-4 rounded-lg bg-[#343a40] px-4 shadow-md">
            {t("home:compassion")}
          </li>
          <li className="mb-4 rounded-lg bg-[#343a40] px-4 shadow-md">
            {t("home:empathy")}
          </li>
          <li className="mb-4 rounded-lg bg-[#343a40] px-4 shadow-md">
            {t("home:responsibility")}
          </li>
          <li className="mb-4 rounded-lg bg-[#343a40] px-4 shadow-md">
            {t("home:respect")}
          </li>
          <li className="mb-4 rounded-lg bg-[#343a40] px-4 shadow-md">
            {t("home:sincerity")}
          </li>
        </ul>
      </div>

      <div className="description-right-container">
        <img
          src={balance}
          alt="description img"
          className="w-full bg-[#343a40] md:p-10"
        />
      </div>
    </div>
  );
};

export default Description;
