import React from "react";
import "./OneToOne.css";
import oneToOne from "../../../assets/one-to-one.jpg";

const OneToOne = () => (
  <div className="oneToOne_section section_padding">
    <div className="left-container">
      <img src={oneToOne} alt="one to one" className="left-image" />
    </div>
    <div className="right-container">
      <h2 className="oneToOne-title">One-to-One</h2>
      <p>
        Vom stabili impreuna obiectivele tale si vom dezvolta un plan
        personalizat de actiune pentru a le atinge. Voi utiliza diverse tehnici
        si instrumente de coaching pentru a te ajuta sa iti descoperi punctele
        forte, sa identifici obstacolele si sa pasii necesari pe care sa ii
        urmezi pentru a le depasii.
      </p>
      <p>
        In timpul sesiunilor esti intr-un spatiu sigur si ai libertatea sa iti
        exprimi gandurile si sentimentele fara a fi judecat. Voi asculta active
        si iti voi adresa intrebari pentru a te ajuta sa explorezi mai profund
        situatiile cu care te confrunti si sa gasesti solutii la ele.
      </p>
      <p>
        Voi fi cu tine sa te sustin in procesul de dezvoltare si sa te incurajez
        sa isi urmezi visurile si sa iti atingi obiectivele. Impreuna vom lucra
        la gestionarea stresului, comunicarea asertiva, construirea increderii
        in tine, stabilirea limitelor sanatoase, pentru a face fata cu succes
        oricarei provocari.
      </p>
    </div>
  </div>
);

export default OneToOne;
