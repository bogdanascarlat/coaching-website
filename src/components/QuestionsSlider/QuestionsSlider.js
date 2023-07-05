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

  const { title, content } = slides[currentSlide];

  return (
    <div class="flex flex-col items-center text-center mx-auto mb-40 max-w-screen-lg">
      <h2 class="text-3xl font-bold mb-3 text-center">
        {" "}
        {t("home:frequentquestions")}
      </h2>
      <div class="h-60 flex flex-col justify-center items-center slider-content overflow-y-auto sm:w-[90%]">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "" : "hidden"}>
            <h2 class="text-2xl font-bold mb-4 mt-10">{slide.title}</h2>
            <p class="text-lg leading-relaxed mb-6">{slide.content}</p>
          </div>
        ))}
      </div>
      <div class="flex justify-between w-full max-w-400 sm:ml-10 sm:mr-10">
        <button
          onClick={goToPreviousSlide}
          class="flex justify-center items-center text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12 sm:ml-[3rem] sm:mt-[3rem] xs:ml-[3rem] xs:mt-[3rem]"
        >
          {t("home:prevquestion")}
        </button>
        <button
          onClick={goToNextSlide}
          class="flex justify-center items-center text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12 sm:mr-[3rem] sm:mt-[3rem] xs:ml-[3rem] xs:mt-[3rem]"
        >
          {t("home:nextquestion")}
        </button>
      </div>
    </div>
  );
};
export default QuestionsSlider;
