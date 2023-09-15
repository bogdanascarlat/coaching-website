import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const QuestionsSlider = () => {
  const { t } = useTranslation(["home"]);
  const slides = [
    {
      title: t("home:qt1"),
      content: t("home:qa1"),
    },
    {
      title: t("home:qt2"),
      content: t("home:qa2"),
    },
    {
      title: t("home:qt3"),
      content: t("home:qa3"),
    },
    {
      title: t("home:qt4"),
      content: t("home:qa4"),
    },
    {
      title: t("home:qt5"),
      content: t("home:qa5"),
    },
    {
      title: t("home:qt6"),
      content: t("home:qa6"),
    },
    {
      title: t("home:qt7"),
      content: t("home:qa7"),
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="mt-[6rem] flex flex-col items-center text-center">
      <h2 className="mb-10 md:mb-5 xl:mb-5 text-center text-3xl font-bold">
        {t("home:frequentquestions")}
      </h2>
      <div className="slider-content flex h-96 md:h-60 xl:h-60 flex-col items-center justify-center overflow-y-auto sm:w-[90%]">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "" : "hidden"}>
            <h2 className="mb-4 mt-10 text-2xl font-bold">{slide.title}</h2>
            <p className="mb-6 text-lg leading-relaxed">{slide.content}</p>
          </div>
        ))}
      </div>
      <div className="max-w-400 flex w-full justify-between">
        <button
          onClick={goToPreviousSlide}
          className="xs:ml-[3rem] xs:mt-[3rem] flex h-12 cursor-pointer items-center justify-center rounded-md border-none bg-[#1a202c] px-4 py-1 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-[#2d3748] sm:ml-[3rem] sm:mt-[3rem]"
        >
          {t("home:prevquestion")}
        </button>
        <button
          onClick={goToNextSlide}
          className="xs:ml-[3rem] xs:mt-[3rem] flex h-12 cursor-pointer items-center justify-center rounded-md border-none bg-[#1a202c] px-4 py-1 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-[#2d3748] sm:mr-[3rem] sm:mt-[3rem]"
        >
          {t("home:nextquestion")}
        </button>
      </div>
    </div>
  );
};
export default QuestionsSlider;
