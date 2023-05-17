import React, { useState } from "react";
import inspiringPhoto from "../../assets/intro-photo.jpg";

const Header = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem]">
      <img
        src={inspiringPhoto}
        alt="tree"
        class="w-full md:w-[35rem] mr-[5rem]"
      />
      <div class="justify-center items-center my-auto">
        <h1 class="text-4xl font-bold md:mb-16 leading-9 sm:text-4xl sm:mt-3 sm:mb-3">
          In toate aspectele vietii noastre, echilibrul este cheia
        </h1>
        <p class="text-lg mb-5 leading-relaxed sm:text-base">
          Te ghidez sa identifici sursele de stres si sa dezvoltam impreuna
          strategii eficiente in gestionarea acestuia, pentru a gasi echilibru
          in toate aspectele vietii tale.
        </p>
        <button
          type="button"
          class="bg-[#343a40] text-white font-bold tracking-wider text-sm rounded-md py-2 px-4 hover:bg-[#495057] sm:text-base"
          onClick={toggleNewText}
        >
          {showNewText ? "Ascunde" : "Afla mai mult"}
        </button>
        {showNewText && (
          <div class="font-bold mt-10">
            <p class="mb-5">
              In ziua de azi munca poate deveni extrem de solicitanta si poate
              fi greu sa obtinem un echilibru perfect intre viata personala si
              cea profesionala. Cu toate acestea, e bine sa te asiguri ca nu iti
              ignori nevoile personale precum timpul tau, timpul cu familia,
              prietenii, activitatile care iti plac si relaxarea.
            </p>
            <p class="mb-5">
              La finalul zilei e bine sa iti reamintesti ca un echilibru sanatos
              iti va aduce mai multa fericire, implinire si relatii mai bune cu
              cei din jur.
            </p>
            <p class="mb-5">
              Cheia catre o viata mai buna esre sa te asiguri ca nu te
              concentrezi doar asupra muncii si a realizarilor profesionale, ci
              te ocupi si de sanatatea ta mentala si fizica, precum si de
              bunastarea ta generala. Este important sa iti acord timp pentru
              tine, gandurile tale si sanatatea ta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
