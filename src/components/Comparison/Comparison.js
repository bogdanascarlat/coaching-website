import React from "react";
import "./Comparison.css";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

const Comparison = () => (
  <div className="comparison-wrapper">
    <div className="container">
      <div className="top-wrapper">
        <div className="top-left">
          <img src={before} alt="before" />
        </div>
        <span className="top-container">
          <p className="top-text">
            Voi fi cu tine sa te sustin in procesul de dezvoltare si sa te
            incurajez sa iti urmezi visurile si sa iti atingi obiectivele.
          </p>
        </span>
      </div>
      <div className="middle">
        <q className="quote-text">
          Echilibrul este starea perfectă a apei liniștite. Să fie acesta
          modelul nostru.
        </q>
        <p className="quote-author">&#8211; Confucius &#8211;</p>
      </div>
      <div className="bottom-right">
        <span></span>
        <img src={after} alt="after" />
      </div>
    </div>
  </div>
);

export default Comparison;
