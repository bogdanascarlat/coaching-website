import React from "react";
import work from "../../assets/work.jpg";
import group from "../../assets/group.jpg";
import workshop from "../../assets/workshop.jpg";
import "./Work.css";

const Work = () => (
  <div className="work_section">
    <div className="">
      <h1 className="work">Cum vom lucra impreuna?</h1>
      <p className="work_text" style={{ margin: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="gallery">
        <div>
          <p className="gallery_description">One to one</p>
          <img src={work} alt="one-to-one"></img>
        </div>
        <div>
          <p className="gallery_description">Grupuri</p>
          <img src={group} alt="group"></img>
        </div>
        <div>
          <p className="gallery_description">Workshop</p>
          <img src={workshop} alt="workshop"></img>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
