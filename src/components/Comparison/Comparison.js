import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./Comparison.css";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

const Comparison = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="comparison-wrapper">
      <div className="container">
        <div className="top-wrapper">
          <div className="top-left">
            <img src={before} alt="before" />
          </div>
          <span className="top-text-container">
            <h2 className="top-text-title">Inainte de a apela la un coach</h2>
            <p className="first-paragraph">
              Ma luptam cu sentimente coplesitoare de stres, anxietate si
              epuizare. In calitate de profesionist, m-am trezit adesea ca imi
              sacrificam viata personala si relatiile pentru a raspunde
              cerintelor profesionale. Am fost constant suprasolicitata si mi-am
              neglijat propriile nevoi fizice si emotionale, ceea ce a dus la
              epuizare si intr-un final la boala.
            </p>
            <p className="second-paragraph">
              Imi era din ce in ce mai greu sa ma concentrez, dar tot imi
              ignoram sanatatea si puneam munca pe primul loc. Imi era frica sa
              ma aleg pe mine. Stiam ca trebuie sa schimb ceva, dar nu stiam
              exact ce sa fac si de unde sa incep, macinata fiind de teama ca as
              putea sa imi pierd locul de munca.
            </p>
            {/* <p className="top-text-content">
              {showFullText
                ? "Ma luptam cu sentimente coplesitoare de stres, anxietate si epuizare. In calitate de profesionist, m-am trezit adesea ca imi sacrificam viata personala si relatiile pentru a raspunde cerintelor profesionale. Am fost constant suprasolicitata si mi-am neglijat propriile nevoi fizice si emotionale, ceea ce a dus la epuizare si intr-un final la boala. Imi era din ce in ce mai greu sa ma concentrez, dar tot imi ignoram sanatatea si puneam munca pe primul loc. Imi era frica sa ma aleg pe mine. Stiam ca trebuie sa schimb ceva, dar nu stiam exact ce sa fac si de unde sa incep, macinata fiind de teama ca as putea sa imi pierd locul de munca."
                : "Ma luptam cu sentimente coplesitoare de stres, anxietate si epuizare."}
              <div className="button-wrapper">
                <button onClick={toggleFullText} className="custom_button">
                  {showFullText ? "Ascunde textul" : "Arata tot textul"}
                </button>
              </div>
            </p> */}
          </span>
        </div>
        <div className="middle">
          <q className="quote-text">
            Echilibrul este starea perfectă a apei liniștite. Să fie acesta
            modelul nostru.
          </q>
          <p className="quote-author">&#8211; Confucius &#8211;</p>
        </div>
        <div className="bottom-wrapper">
          <span className="bottom-text-container">
            <h2 className="top-text-title">Dupa ce am lucrat cu un coach:</h2>
            <p className="first-paragraph">
              Am reusit sa gasesc echilibrul intre munca si viata personala. Am
              reusit sa stabilesc limite clare si sanatoase la locul de munca.
              Am invatat sa imi spun mie &bdquo;DA&bdquo;. Acum acord prioritate
              ingrijirii mele personale si ma asigur ca fac pauza cand am
              nevoie, imi folosesc timpul liber pentru a ma recrea, ma plimb,
              citesc si am timp pentru familia mea.
            </p>
            <p className="second-paragraph">
              Imi era din ce in ce mai greu sa ma concentrez, dar tot imi
              ignoram sanatatea si puneam munca pe primul loc. Imi era frica sa
              ma aleg pe mine. Stiam ca trebuie sa schimb ceva, dar nu stiam
              exact ce sa fac si de unde sa incep, macinata fiind de teama ca as
              putea sa imi pierd locul de munca.
            </p>
          </span>
          <div className="bottom-right">
            <img src={after} alt="after" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
