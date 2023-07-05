import React from "react";
import "./Group.css";
import group from "../../../assets/group.jpg";

const Group = () => (
  <div className="mb-30 ml-auto mr-auto grid w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
    <div className="bg-dark-grey flex-1 bg-[#343a40]">
      <img src={group} alt="group" className="h-full bg-[#343a40] p-16" />
    </div>
    <div className="flex flex-1 flex-col items-start justify-center bg-[#ffe8cc] p-5 md:ml-auto md:mr-auto">
      <h2 className="group-title mb-4 bg-[#ffe8cc] pt-4 text-2xl font-bold">
        Group
      </h2>
      <p className="mb-2 bg-[#ffe8cc]">
        Sesiunea de coaching de grup este o sesiune ghidata de mine intr-o
        discutie structurata cu tematica setata anterior.
      </p>
      <p className="mb-2 bg-[#ffe8cc]">
        In general, astfel de sesiuni de coaching sunt proiectate sa fie
        interactiva si implica o combinatie de prezentare de informatii,
        discutii si exercitii. De obicei, tema sau subiectul este ales in
        functie de obiectivele participantilor, poti regasi teme precum:
        gestionarea stresului, comunicarea eficienta, dezvoltarea abilitatilor
        de lider, cresterea increderii in sine, managementul timpului, setarea
        de limite sanatoase, si multe altele.
      </p>
      <p className="mb-2 bg-[#ffe8cc]">
        In timpul sesiunii voi adresa intrebari deschise, voi asculta activ, voi
        indruma discutiile si voi oferi oportunitatea participantilor de a
        invata din experienta altora si de a gasi solutii.
      </p>
      <p className="mb-2 bg-[#ffe8cc]">
        In general, sesiunile de coaching de grup sunt ideale pentru persoanele
        care cauta o abordare mai accesibila si mai putin intensive de coaching,
        dar care isi doresc sa primeasca sprijinul si ghidarea unui coach si sa
        invete din experienta altor participant.
      </p>
    </div>
  </div>
);

export default Group;
