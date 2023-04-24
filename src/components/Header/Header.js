import React, { useState } from "react";
import inspiringPhoto from "../../assets/intro-photo.jpg";
import "./Header.css";

const Header = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };

  return (
    <div className="header_container">
      <img src={inspiringPhoto} alt="tree" className="header_background" />
      <div className="overlay">
        <h1 className="header_title">
          In toate aspectele vietii noastre, echilibrul este cheia
        </h1>
        <p className="header_content">
          Te ghidez sa identifici sursele de stres si sa dezvoltam impreuna
          strategii eficiente in gestionarea acestuia, pentru a gasi echilibru
          in toate aspectele vietii tale.
        </p>
        <button
          type="button"
          className="header_custom_button"
          onClick={toggleNewText}
        >
          {showNewText ? "Ascunde" : "Afla mai mult"}
        </button>
        {showNewText && (
          <div className="new_text">
            <p>
              In ziua de azi munca poate deveni extrem de solicitanta si poate
              fi greu sa obtinem un echilibru perfect intre viata personala si
              cea profesionala. Cu toate acestea, e bine sa te asiguri ca nu iti
              ignori nevoile personale precum timpul tau, timpul cu familia,
              prietenii, activitatile care iti plac si relaxarea.
            </p>
            <p>
              La finalul zilei e bine sa iti reamintesti ca un echilibru sanatos
              iti va aduce mai multa fericire, implinire si relatii mai bune cu
              cei din jur.
            </p>
            <p>
              Cheia catre o viata mai buna esre sa te asiguri ca nu te
              concentrezi doar asupra muncii si a realizarilor profesionale, ci
              te ocupi si de sanatatea ta mentala si fizica, precum si de
              bunastarea ta generala. Este important sa iti acord timp pentru
              tine, gandurile tale si sanatatea ta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
