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
    <div className="slider">
      <h2 className="slider-title">Intrebari frecvente</h2>
      <div className="slider-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="slider-buttons">
        <button onClick={goToPreviousSlide} className="custom_button">
          Anterioara
        </button>
        <button onClick={goToNextSlide} className="custom_button">
          Urmatoare
        </button>
      </div>
    </div>
  );
};

export default QuestionsSlider;
