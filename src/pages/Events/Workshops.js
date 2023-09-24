import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import coming_soon from "../../assets/coming_soon.jpg";

import { useTranslation } from "react-i18next";

const Workshops = () => {
    const { t } = useTranslation(["workshops"]);
    
  return (
    <div>
      <Navbar/>
      <div
          className="relative bg-cover bg-center bg-no-repeat h-screen mt-[5rem] mb-[5rem]"
          style={{ backgroundImage: `url(${coming_soon})` }}
      >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center w-[70%] md:w-[70%] xl:w-full">
            <h1 className="sliding-paragraph text-5xl font-bold leading-9 text-center sm:text-4xl my-10 md:my-0 xl:my-0"> {t("workshops:coming-soon")}</h1>
            <p className="mt-[8rem] text-3xl mx-5">{t("workshops:follow-me")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workshops;
