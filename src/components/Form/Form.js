import React from "react";
import "./Form.css";

const Form = () => (
  <div className="form-container">
    <div className="contact">
      <h1 className="heading">Contactati-ma</h1>
      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="nume" />
          <input type="email" placeholder="email" />
        </div>

        <div className="inputBox">
          <input type="number" placeholder="scurta descriere" />
          <input type="text" placeholder="subiect" />
        </div>

        <textarea
          placeholder="mesaj"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="TRIMITE MESAJ" className="btn" />
      </form>
    </div>
  </div>
);

export default Form;
