import React from "react";
import inspiringPhoto from "../../assets/inspiring-photo.jpg";
import "./Header.css";

const Header = () => (
  <div style={{ marginBottom: "1rem" }} className="header_container">
    <img src={inspiringPhoto} alt="photo" className="header_background" />
    <div class="overlay overlay_1">
      <h3>Orice este posibil atata timp cat iti doresti cu adevarat.</h3>
    </div>
  </div>
);

export default Header;
