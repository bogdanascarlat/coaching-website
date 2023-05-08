import React, { useState } from "react";
import "./QuestionsSlider.css";

const QuestionsSlider = ({ slides }) => {
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
      <h2 class="text-3xl font-bold mb-3 text-center">Intrebari frecvente</h2>
      <div class="h-60 flex flex-col justify-center items-center slider-content overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4 mt-10">{title}</h2>
        <p class="text-lg leading-relaxed mb-6">{content}</p>
      </div>
      <div class="flex justify-between w-full max-w-400">
        <button
          onClick={goToPreviousSlide}
          class="flex justify-center items-center max-w-400px text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12"
        >
          Anterioara
        </button>
        <button
          onClick={goToNextSlide}
          class="flex justify-center items-center max-w-400px text-base font-bold px-4 py-1 border-none rounded-md bg-[#1a202c] hover:bg-[#2d3748] text-white cursor-pointer transition ease-in-out duration-200 w-[15%] h-12"
        >
          Urmatoare
        </button>
      </div>
    </div>
  );
};
export default QuestionsSlider;
