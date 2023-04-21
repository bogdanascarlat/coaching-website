import React from "react";
import inspiringPhoto from "../../assets/intro-photo.jpg";
import "./Header.css";

const Header = () => (
  <div className="header_container">
    <img src={inspiringPhoto} alt="tree" className="header_background" />
    <div class="overlay">
      <h1 class="header_title">
        In toate aspectele vietii noastre, echilibrul este cheia
      </h1>
      <p class="header_content">
        Te ghidez sa identifici sursele de stres si sa dezvoltam impreuna
        strategii eficiente in gestionarea acestuia, pentru a gasi echilibru in
        toate aspectele vietii tale.
      </p>
      <button type="button" class="custom_button">
        Afla mai mult
      </button>
    </div>
  </div>
);

export default Header;
