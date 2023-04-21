import React from "react";
import balance from "../../assets/balance.jpg";
import "./Description.css";

const Description = () => (
  <div className="description wrapper section_padding">
    <div className="wrapper_info">
      <h1 className="description-title">Cheia catre o viata mai buna</h1>
      <p className="p__opensans" style={{ margin: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button type="button" className="custom_button">
        Afla mai mult
      </button>
    </div>
    <div className="wrapper_img">
      <img src={balance} alt="description img" />
    </div>
  </div>
);

export default Description;
