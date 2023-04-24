import React from "react";
import balance from "../../assets/balance.jpg";
import "./Description.css";

const Description = () => (
  <div className="description wrapper section_padding">
    <div className="wrapper_info">
      <h1 className="description-title">Valorile mele</h1>
      <p className="description-content">
        Compasiune
        <hr />
      </p>
      <p className="description-content">
        Empatie
        <hr />
      </p>
      <p className="description-content">
        Responsabilitate
        <hr />
      </p>
      <p className="description-content">
        Respect
        <hr />
      </p>
      <p className="description-content">
        Sinceritate
        <hr />
      </p>
      {/* <button type="button" className="description_custom_button">
        Afla mai mult
      </button> */}
    </div>
    <div className="wrapper_img">
      <img src={balance} alt="description img" />
    </div>
  </div>
);

export default Description;
