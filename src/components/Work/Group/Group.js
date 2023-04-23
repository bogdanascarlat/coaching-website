import React from "react";
import "./Group.css";
import group from "../../../assets/group.jpg";

const Group = () => (
  <div className="group_section section_padding">
    <div className="left-container">
      <img src={group} alt="group" className="left-image" />
    </div>
    <div className="right-container">
      <h2 className="group-title">Group</h2>
      <p>
        Sesiunea de coaching de grup este o sesiune ghidata de mine intr-o
        discutie structurata cu tematica setata anterior.
      </p>
      <p>
        In general, astfel de sesiuni de coaching sunt proiectate sa fie
        interactiva si implica o combinatie de prezentare de informatii,
        discutii si exercitii. De obicei, tema sau subiectul este ales in
        functie de obiectivele participantilor, poti regasi teme precum:
        gestionarea stresului, comunicarea eficienta, dezvoltarea abilitatilor
        de lider, cresterea increderii in sine, managementul timpului, setarea
        de limite sanatoase, si multe altele.
      </p>
      <p>
        In timpul sesiunii voi adresa intrebari deschise, voi asculta activ, voi
        indruma discutiile si voi oferi oportunitatea participantilor de a
        invata din experienta altora si de a gasi solutii.
      </p>
      <p>
        In general, sesiunile de coaching de grup sunt ideale pentru persoanele
        care cauta o abordare mai accesibila si mai putin intensive de coaching,
        dar care isi doresc sa primeasca sprijinul si ghidarea unui coach si sa
        invete din experienta altor participant.
      </p>
    </div>
  </div>
);

export default Group;
