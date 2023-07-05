import React from "react";
import "./OneToOne.css";
import oneToOne from "../../../assets/one-to-one.jpg";

const OneToOne = () => (
  <div className="mb-30 ml-auto mr-auto grid w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
    <div className="bg-dark-grey flex-1 bg-[#343a40]">
      <img
        src={oneToOne}
        alt="one to one"
        className="h-full bg-[#343a40] p-16"
      />
    </div>
    <div className="ml-auto mr-auto flex flex-1 flex-col items-start justify-center bg-[#ffe8cc] p-5">
      <h2 className="group-title mb-4 bg-[#ffe8cc] pt-4 text-2xl font-bold">
        One-to-One
      </h2>
      <p className="mb-2 bg-[#ffe8cc]">
        Vom stabili impreuna obiectivele tale si vom dezvolta un plan
        personalizat de actiune pentru a le atinge. Voi utiliza diverse tehnici
        si instrumente de coaching pentru a te ajuta sa iti descoperi punctele
        forte, sa identifici obstacolele si sa pasii necesari pe care sa ii
        urmezi pentru a le depasii.
      </p>
      <p className="mb-2 bg-[#ffe8cc]">
        In timpul sesiunilor esti intr-un spatiu sigur si ai libertatea sa iti
        exprimi gandurile si sentimentele fara a fi judecat. Voi asculta active
        si iti voi adresa intrebari pentru a te ajuta sa explorezi mai profund
        situatiile cu care te confrunti si sa gasesti solutii la ele.
      </p>
      <p className="mb-2 bg-[#ffe8cc]">
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
