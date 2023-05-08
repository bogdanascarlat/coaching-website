import React from "react";
import "./Coaching.css";
import coaching from "../../../assets/meeting.jpg";

const Coaching = () => (
  <div class="grid grid-cols-2 w-[90%] h-80 ml-auto mr-auto mb-60 bg-[#343a40]">
    <div class="flex-1 bg-dark-grey bg-[#343a40] h-full">
      <img src={coaching} alt="coaching" class="p-16 bg-[#343a40]" />
    </div>
    <div class="flex-1 p-5 bg-[#ffe8cc] justify-center items-start ml-auto mr-auto overflow-y-scroll h-full">
      <h2 class="group-title text-2xl font-bold mb-4 pt-4 bg-[#ffe8cc]">
        Executive Coaching
      </h2>
      <p class="bg-[#ffe8cc] mb-2">
        Serviciile de executive coaching sunt disponibile pentru o gama larga de
        teme, adaptate dupa nevoile si obiectivele specifice ale echipei sau
        companiei. Acestea implica o combinatie de prezentare si exercitii
        practice, destinate sa ofere participantilor o mai buna intelegere a
        subiectului si sa le permita sa isi dezvolte abilitatile intr-un mediu
        sigur si sustinator.
      </p>
      <p class="bg-[#ffe8cc] mb-2 font-bold">Iata cateva exemple:</p>
      <dl class="bg-[#ffe8cc]">
        <dt class="bg-[#ffe8cc] font-semibold">Leadership si management </dt>
        <dd class="bg-[#ffe8cc] mb-2">
          Dezvoltarea abilitatilor de conducere si management, inclusive
          strategii de comunicare eficienta, crearea de echipe puternice si
          motivarea angajatilor.
        </dd>

        <dt class="bg-[#ffe8cc] font-semibold">Abilitati de comunicare</dt>
        <dd class="bg-[#ffe8cc] mb-2">
          Dezvoltarea abilitatilor de comunicare, inclusive tehnici de ascultare
          active, empatie si comunicare non-verbala.
        </dd>

        <dt class="bg-[#ffe8cc] font-semibold">Work-life balance </dt>
        <dd class="bg-[#ffe8cc] mb-2">
          Imbunatatirea stimei de sine, dezvoltarea abilitatilor de invatare,
          setare limite sanatoase si planificarea carierei.
        </dd>

        <dt class="bg-[#ffe8cc] font-semibold">
          Gestionarea stresului si anxietatii
        </dt>
        <dd class="bg-[#ffe8cc] mb-2">
          Intelegerea si gestionarea stresului si a anxietatii, inclusive
          tehnici de relaxare, mindfulness si managementul timpului.
        </dd>

        <dt class="bg-[#ffe8cc] font-semibold">Inteligenta emotionala</dt>
        <dd class="bg-[#ffe8cc] mb-2">
          Intelegerea si dezvoltarea abilitatilor de inteligenta emotionala,
          inclusive autodisciplina, empatie si gestionarea conflictelor.
        </dd>
      </dl>

      <p class="bg-[#ffe8cc] mb-2 font-bold">
        Fiecare workshop/ pachet de sesiuni este personalizat in functie de
        nevoile si obiectivele specific ale clientului si poate fi livrat online
        sau fizic.
      </p>
    </div>
  </div>
);

export default Coaching;
