import React, { useState } from "react";
import inspiringPhoto from "../../assets/intro-photo.jpg";

import { useTranslation } from "react-i18next";

const Header = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };

  const { t } = useTranslation(["home"]);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem]">
      <img
        src={inspiringPhoto}
        alt="tree"
        class="w-full md:w-[35rem] mr-[5rem]"
      />
      <div class="justify-center items-center my-auto">
        <h1 class="text-4xl font-bold md:mb-16 leading-9 sm:text-4xl sm:mt-3 sm:mb-3 sm:text-center xs:mb-[3rem]">
          {t("home:inallaspectsofourlivesbalanceiskey")}
        </h1>
        <p class="text-lg mb-5 leading-relaxed sm:text-base md:pt-[8rem] sm:text-center">
          {t(
            "home:iguideyoutoidentifythesourcesofstressandtodeveloptogethereffectivestrategiesinmanagingittofindbalanceinallaspectsofyourlife."
          )}
        </p>
        <div class="flex justify-center sm:justify-center">
          <button
            type="button"
            class="bg-[#343a40] text-white font-bold tracking-wider text-sm rounded-md py-2 px-4 hover:bg-[#495057] sm:text-base"
            onClick={toggleNewText}
          >
            {showNewText ? t("home:hide") : t("home:findmore")}
          </button>
        </div>
        {showNewText && (
          <div class="font-bold mt-10">
            <p class="mb-5">{t("home:p1")}</p>
            <p class="mb-5">{t("home:p2")}</p>
            <p class="mb-5">{t("home:p3")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
