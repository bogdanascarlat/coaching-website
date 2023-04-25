import React from "react";
import invite from "../../assets/invite.jpg";
import "./Invite.css";

const Invite = () => (
  <div className="invite_section">
    <div className="left-container">
      <img src={invite} alt="one to one" className="left-image" />
    </div>

    <div className="right-container">
      <h2 className="invite-logo">Roxana Dumitrescu</h2>
      <div className="invite-content">
        <h3 className="invite-title">
          Esti pregatit pentru cea mai interesanta experienta de coaching?
        </h3>
        <p>
          Te invit la o sedinta gratuita pentru a descoperi impreuna cum te pot
          ghida.
        </p>
        <a href="https://bit.ly/3owcQLe" className="invite_custom_button">
          Programeaza o sedinta
        </a>
      </div>
    </div>
  </div>
);

export default Invite;
