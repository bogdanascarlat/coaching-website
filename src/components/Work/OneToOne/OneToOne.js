import React from "react";
import "./OneToOne.css";
import oneToOne from "../../../assets/one-to-one.jpg";

const OneToOne = () => (
  <div class="grid grid-cols-1 md:grid-cols-2 w-[90%] ml-auto mr-auto mb-30 bg-[#343a40]">
    <div class="flex-1 bg-dark-grey bg-[#343a40]">
      <img src={oneToOne} alt="one to one" class="p-16 bg-[#343a40] h-full" />
    </div>
    <div class="flex-1 p-5 bg-[#ffe8cc] flex flex-col justify-center items-start ml-auto mr-auto">
      <h2 class="group-title text-2xl font-bold mb-4 pt-4 bg-[#ffe8cc]">
        One-to-One
      </h2>
      <p class="bg-[#ffe8cc] mb-2">
        Vom stabili impreuna obiectivele tale si vom dezvolta un plan
        personalizat de actiune pentru a le atinge. Voi utiliza diverse tehnici
        si instrumente de coaching pentru a te ajuta sa iti descoperi punctele
        forte, sa identifici obstacolele si sa pasii necesari pe care sa ii
        urmezi pentru a le depasii.
      </p>
      <p class="bg-[#ffe8cc] mb-2">
        In timpul sesiunilor esti intr-un spatiu sigur si ai libertatea sa iti
        exprimi gandurile si sentimentele fara a fi judecat. Voi asculta active
        si iti voi adresa intrebari pentru a te ajuta sa explorezi mai profund
        situatiile cu care te confrunti si sa gasesti solutii la ele.
      </p>
      <p class="bg-[#ffe8cc] mb-2">
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
