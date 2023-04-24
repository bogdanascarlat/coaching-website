import React from "react";
import "./Form.css";

const Form = () => (
  <div className="form-container">
    <div className="contact">
      <h1 className="heading">Trimite un mesaj</h1>
      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="nume" />
          <input type="email" placeholder="email" />
        </div>
        <textarea
          placeholder="mesaj"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="TRIMITE MESAJUL" className="btn" />
      </form>
    </div>
  </div>
);

export default Form;
