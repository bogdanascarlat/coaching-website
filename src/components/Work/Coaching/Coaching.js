import React from "react";
import "./Coaching.css";
import coaching from "../../../assets/meeting.jpg";

const Coaching = () => (
  <div className="coaching-section mb-40 md:mb-40 xl:mb-40 ml-auto mr-auto grid w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
    <div className="bg-dark-grey h-full flex-1 bg-[#343a40]">
      <img src={coaching} alt="coaching" className="bg-[#343a40] p-16" />
    </div>

    <div className="ml-auto mr-auto flex h-full flex-col items-start justify-center overflow-y-scroll bg-[#ffe8cc] p-5">
      <h2 className="coaching-title mb-5 mt-80 bg-[#ffe8cc] pt-4 text-2xl font-bold">
        Executive Coaching
      </h2>
      <p className="mb-2 bg-[#ffe8cc]">
        Serviciile de executive coaching sunt disponibile pentru o gama larga de
        teme, adaptate dupa nevoile si obiectivele specifice ale echipei sau
        companiei. Acestea implica o combinatie de prezentare si exercitii
        practice, destinate sa ofere participantilor o mai buna intelegere a
        subiectului si sa le permita sa isi dezvolte abilitatile intr-un mediu
        sigur si sustinator.
      </p>
      <p className="mb-2 bg-[#ffe8cc] font-bold">Iata cateva exemple:</p>
      <dl className="bg-[#ffe8cc]">
        <dt className="bg-[#ffe8cc] font-semibold">
          Leadership si management{" "}
        </dt>
        <dd className="mb-2 bg-[#ffe8cc]">
          Dezvoltarea abilitatilor de conducere si management, inclusive
          strategii de comunicare eficienta, crearea de echipe puternice si
          motivarea angajatilor.
        </dd>

        <dt className="bg-[#ffe8cc] font-semibold">Abilitati de comunicare</dt>
        <dd className="mb-2 bg-[#ffe8cc]">
          Dezvoltarea abilitatilor de comunicare, inclusive tehnici de ascultare
          active, empatie si comunicare non-verbala.
        </dd>

        <dt className="bg-[#ffe8cc] font-semibold">Work-life balance </dt>
        <dd className="mb-2 bg-[#ffe8cc]">
          Imbunatatirea stimei de sine, dezvoltarea abilitatilor de invatare,
          setare limite sanatoase si planificarea carierei.
        </dd>

        <dt className="bg-[#ffe8cc] font-semibold">
          Gestionarea stresului si anxietatii
        </dt>
        <dd className="mb-2 bg-[#ffe8cc]">
          Intelegerea si gestionarea stresului si a anxietatii, inclusive
          tehnici de relaxare, mindfulness si managementul timpului.
        </dd>

        <dt className="bg-[#ffe8cc] font-semibold">Inteligenta emotionala</dt>
        <dd className="mb-2 bg-[#ffe8cc]">
          Intelegerea si dezvoltarea abilitatilor de inteligenta emotionala,
          inclusive autodisciplina, empatie si gestionarea conflictelor.
        </dd>
      </dl>

      <p className="mb-2 bg-[#ffe8cc] font-bold">
        Fiecare workshop/ pachet de sesiuni este personalizat in functie de
        nevoile si obiectivele specific ale clientului si poate fi livrat online
        sau fizic.
      </p>
    </div>
  </div>
);

export default Coaching;
