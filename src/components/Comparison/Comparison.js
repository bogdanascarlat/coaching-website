import React from "react";
import "./Comparison.css";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

const Comparison = () => (
  <div className="description wrapper section_padding">
    <div className="wrapper_info">
      <h1 className="comparison-title">Inainte</h1>
      <div className="comparison">
        <p className="comparison-text" style={{ margin: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src={before} alt="before"></img>
      </div>
    </div>
    <div class="middle-container">
      <h2>&#8243;Quote</h2>
    </div>
    <div className="wrapper_info">
      <h1 className="comparison-title">Dupa</h1>
      <div className="comparison">
        <p className="comparison-text" style={{ margin: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src={after} alt="before"></img>
      </div>
    </div>
  </div>
);

export default Comparison;
