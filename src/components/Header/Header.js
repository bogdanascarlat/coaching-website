import React, { useState} from "react";
import inspiringPhoto from "../../assets/intro-photo.jpg";


import { useTranslation } from "react-i18next";

const Header = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };
  const { t } = useTranslation(["home"]);


  return (
    <div className="mt-[6rem] grid grid-cols-1 gap-4 md:grid-cols-2">
      <img
        src={inspiringPhoto}
        alt="tree"
        className="mr-[5rem] w-full md:w-[35rem]"
      />
      <div className="my-auto items-center justify-center">
      <h1 className="sliding-paragraph text-4xl font-bold leading-9 text-center sm:text-4xl my-10 md:my-0 xl:my-0">
          {t("home:inallaspectsofourlivesbalanceiskey")}
        </h1>
        <p className="mb-5 text-lg leading-relaxed text-center sm:text-base md:pt-[8rem]">
          {t(
            "home:iguideyoutoidentifythesourcesofstressandtodeveloptogethereffectivestrategiesinmanagingittofindbalanceinallaspectsofyourlife."
          )}
        </p>
        <div className="flex justify-center sm:justify-center">
          <button
            type="button"
            className="rounded-md bg-[#343a40] px-4 py-2 text-sm font-bold tracking-wider text-white hover:bg-[#495057] sm:text-base"
            onClick={toggleNewText}
          >
            {showNewText ? t("home:hide") : t("home:findmore")}
          </button>
        </div>
        {showNewText && (
          <div className="mt-10 font-bold">
            <p className="mb-5">{t("home:p1")}</p>
            <p className="mb-5">{t("home:p2")}</p>
            <p className="mb-5">{t("home:p3")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
