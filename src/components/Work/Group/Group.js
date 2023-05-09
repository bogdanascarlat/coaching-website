import React from "react";
import "./Group.css";
import group from "../../../assets/group.jpg";

const Group = () => (
  <div class="grid grid-cols-1 md:grid-cols-2 w-[90%] ml-auto mr-auto mb-30 bg-[#343a40]">
    <div class="flex-1 bg-dark-grey bg-[#343a40]">
      <img src={group} alt="group" class="p-16 bg-[#343a40] h-full" />
    </div>
    <div class="flex-1 p-5 bg-[#ffe8cc] flex flex-col justify-center items-start md:ml-auto md:mr-auto">
      <h2 class="group-title text-2xl font-bold mb-4 pt-4 bg-[#ffe8cc]">
        Group
      </h2>
      <p class="bg-[#ffe8cc] mb-2">
        Sesiunea de coaching de grup este o sesiune ghidata de mine intr-o
        discutie structurata cu tematica setata anterior.
      </p>
      <p class="bg-[#ffe8cc] mb-2">
        In general, astfel de sesiuni de coaching sunt proiectate sa fie
        interactiva si implica o combinatie de prezentare de informatii,
        discutii si exercitii. De obicei, tema sau subiectul este ales in
        functie de obiectivele participantilor, poti regasi teme precum:
        gestionarea stresului, comunicarea eficienta, dezvoltarea abilitatilor
        de lider, cresterea increderii in sine, managementul timpului, setarea
        de limite sanatoase, si multe altele.
      </p>
      <p class="bg-[#ffe8cc] mb-2">
        In timpul sesiunii voi adresa intrebari deschise, voi asculta activ, voi
        indruma discutiile si voi oferi oportunitatea participantilor de a
        invata din experienta altora si de a gasi solutii.
      </p>
      <p class="bg-[#ffe8cc] mb-2">
        In general, sesiunile de coaching de grup sunt ideale pentru persoanele
        care cauta o abordare mai accesibila si mai putin intensive de coaching,
        dar care isi doresc sa primeasca sprijinul si ghidarea unui coach si sa
        invete din experienta altor participant.
      </p>
    </div>
  </div>
);

export default Group;
