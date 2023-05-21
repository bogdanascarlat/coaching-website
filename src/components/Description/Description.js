import React from "react";
import balance from "../../assets/balance.jpg";

import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-[35rem] mt-10 md:mt-[15rem] sm:mt-10 w-[90%] mx-auto bg-[#343a40]">
      <div class="p-8 bg-[#343a40] text-white">
        <h1 class="text-4xl font-bold mb-6 bg-[#343a40]">
          {t("home:myvalues")}
        </h1>
        <ul class="text-lg leading-10 bg-[#343a40]">
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:compassion")}
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {" "}
            {t("home:empathy")}
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:responsibility")}
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:respect")}
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            {t("home:sincerity")}
          </li>
        </ul>
      </div>

      <div class="description-right-container">
        <img
          src={balance}
          alt="description img"
          class="w-full md:p-10 bg-[#343a40]"
        />
      </div>
    </div>
  );
};
export default Description;
