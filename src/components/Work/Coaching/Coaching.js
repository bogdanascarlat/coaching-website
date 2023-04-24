import React from "react";
import "./Coaching.css";
import coaching from "../../../assets/meeting.jpg";

const Coaching = () => (
  <div className="coaching_section section_padding">
    <div className="coaching-left-container">
      <img src={coaching} alt="coaching" className="left-image" />
    </div>
    <div className="coaching-right-container">
      <h2 className="coaching-title">Executive Coaching</h2>
      <p>
        Serviciile de executive coaching sunt disponibile pentru o gama larga de
        teme, adaptate dupa nevoile si obiectivele specifice ale echipei sau
        companiei. Acestea implica o combinatie de prezentare si exercitii
        practice, destinate sa ofere participantilor o mai buna intelegere a
        subiectului si sa le permita sa isi dezvolte abilitatile intr-un mediu
        sigur si sustinator.
      </p>
      <p className="examples-paragraph">Iata cateva exemple:</p>
      <dl>
        <dt>Leadership si management </dt>
        <dd>
          Dezvoltarea abilitatilor de conducere si management, inclusive
          strategii de comunicare eficienta, crearea de echipe puternice si
          motivarea angajatilor.
        </dd>

        <dt>Abilitati de comunicare</dt>
        <dd>
          Dezvoltarea abilitatilor de comunicare, inclusive tehnici de ascultare
          active, empatie si comunicare non-verbala.
        </dd>

        <dt>Work-life balance </dt>
        <dd>
          Imbunatatirea stimei de sine, dezvoltarea abilitatilor de invatare,
          setare limite sanatoase si planificarea carierei.
        </dd>

        <dt>Gestionarea stresului si anxietatii</dt>
        <dd>
          Intelegerea si gestionarea stresului si a anxietatii, inclusive
          tehnici de relaxare, mindfulness si managementul timpului.
        </dd>

        <dt>Inteligenta emotionala</dt>
        <dd>
          Intelegerea si dezvoltarea abilitatilor de inteligenta emotionala,
          inclusive autodisciplina, empatie si gestionarea conflictelor.
        </dd>
      </dl>

      <p>
        Fiecare workshop/ pachet de sesiuni este personalizat in functie de
        nevoile si obiectivele specific ale clientului si poate fi livrat online
        sau fizic.
      </p>
    </div>
  </div>
);

export default Coaching;
