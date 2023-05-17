import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import invite from "../../assets/invite.jpg";
import writing from "../../assets/about1.jpg";
import started from "../../assets/about2.jpg";
import question from "../../assets/about3.jpg";
import learned from "../../assets/about4.jpg";

const About = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem] mb-32">
        <img
          src={invite}
          alt="presentation-photo"
          class="w-full md:w-[35rem] mr-[5rem]"
        />
        <div class="justify-center items-center my-auto">
          <h1 class="text-4xl font-bold md:mb-16 leading-9 sm:text-4xl sm:mt-3 sm:mb-3 text-center">
            Buna!
          </h1>
          <p class="text-2xl mb-5 leading-relaxed  text-center">
            Sunt Roxana si te invit sa identificam impreuna sursele de stres si
            sa dezvoltam strategii eficiente in gestionarea acestuia, pentru a
            gasi echilibru in toate aspectele vietii tale.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center mb-32">
        <div class="relative w-[90%]">
          <img src={writing} alt="writing" class="w-full" />
          <div class="absolute top-0 left-0 text-xl w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-white text-xl bg-transparent w-[80%] flex flex-col items-center justify-center">
              <div class="text-white text-xl bg-transparent w-[80%] mb-20">
                <p class="text-white text-xl bg-transparent mb-5">
                  Am inceput de cel putin 10 ori sa-mi scriu povestea
                  profesionala si de fiecare data stergeam ce mi se parea greu
                  de digerat, t𝗼𝗮𝘁a suferinta, 𝘀𝘁𝗿𝗲𝘀𝘂𝗹 𝗮𝗰𝘂𝗺𝘂𝗹𝗮𝘁 𝘀𝗶 𝘀𝘁𝗮𝗿𝗶𝗹𝗲
                  𝗳𝗶𝘇𝗶𝗰𝗲 𝗰𝗮𝗿𝗲 𝗮𝘂 𝗮𝗷𝘂𝗻𝘀 𝘀𝗮 𝗺𝗮 𝗱𝗼𝗯𝗼𝗮𝗿𝗲 𝗹𝗮 𝗽𝗿𝗼𝗽𝗿𝗶𝘂.
                </p>
                <p class="text-white text-xl bg-transparent">
                  Am trecut-o prin filtrul omului de resurse umane care vorbeste
                  politically correct si care nu are voie sa spuna ceva gresit.
                </p>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5">
                <p class="text-white text-xl bg-transparent mb-5">
                  Dar astazi m-am decis sa o las pe Roxana omul sa preia
                  controlul tastaturii si as vrea sa impartasesc povestea mea in
                  care sunt sigura ca multi se regasesc insa putini vorbesc
                  despre asta.
                </p>
                <h2 class="font-bold text-white text-2xl bg-transparent">
                  De ce? &#8211; De frica.
                </h2>
                <p class="text-white text-xl bg-transparent">
                  De frica de a fi aratat cu degetul, de a fi oaia neagra a
                  departamentului si poate cea mai mare frica, cea de a fi
                  concediat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] mx-auto mt-[5rem] mb-32">
        <div class="my-auto mx-auto">
          <h2 class="text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
            Cum am inceput
          </h2>
          <p class="text-xl mb-5 leading-relaxed">
            Am terminat facultatea si masterul de Business Management, iar in
            cadrul masterului am invatat despre corporatiile internationale. Pe
            vremea cand eram studenta, termenul de corporatie era vag pentru
            Romania, abia intrasera pe piata si era unul dintre locurile de
            munca diferite de ce stiam noi pana atunci si care iti oferea
            perspective de dezvoltare diverse. Am inceput sa lucrez in
            corporatie la 1 an dupa ce am terminat studiile, manata de
            curiozitate si de dorinta de evolutie si cu mari asteptari.
          </p>
        </div>
        <img src={started} alt="student-photo" class="w-full" />
      </div>
      <div class="w-[90%] h-full mx-auto mt-[5rem] mb-32">
        <div class="bg-[#ffe8cc] h-full p-10">
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc]">𝗖𝗮𝗻𝗱 𝗿𝗲𝗮𝗹𝗶𝘁𝗮𝘁𝗲𝗮 𝗺-𝗮 𝗹𝗼𝘃𝗶𝘁…..𝗱𝗲 𝗳𝗮𝗽𝘁. </h2>
            <p class="bg-[#ffe8cc]">
              Managementul international in carti arata foarte bine, are
              structura bine definita, insa in realitate lucrurile nu stau chiar
              asa.
            </p>
          </div>
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc]">
              𝗖𝗲 𝘀𝗲 𝗶𝗻𝘁𝗮𝗺𝗽𝗹𝗮 𝗶𝗻 𝗰𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗶𝗶? - 𝗣𝗿𝗶𝗺𝗮 𝗶𝗺𝗽𝗿𝗲𝘀𝗶𝗲 𝗰𝗮 𝗮𝗻𝗴𝗮𝗷𝗮𝘁 𝗻𝗼𝘂.
            </h2>
            <p class="bg-[#ffe8cc]">
              Se muncea pe rupte si se statea peste program zilnic &#40;asta era
              considerat ceva normal&#41;. Toata lumea era cu capul plecat si
              nimeni nu avea o parere, sau daca avea, era instant demontata. Se
              dadea afara din motive necunoscute si asta era ceva obisnuit.
              Foarte putini erau cei care demisionau pentru ca nu impartaseau
              aceleasi valori cu compania. Unii alegeau sa plece cu voce tare,
              altii mergeau pe varianta tacuta si managerii se trezeau fara
              oameni in echipa, fara solutii, fara back-up plan. Aici aparea
              frustrarea care se transmitea mai departe la echipa, echipa care
              primea munca in plus, ZERO compensatii, mai multe ore state peste
              program, stres constant, critica, cateodata tipete si intr-un
              final multi ajungeau la <b class="bg-[#ffe8cc]">BURNOUT</b>.
            </p>
          </div>
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc] font-bold">Ce faceau in privinta asta?</h2>
            <p class="bg-[#ffe8cc]">
              Mai nimic, se mai plangeau unul la altul, se mai scuturau de praf
              si apoi o luau de la capat ca si cum nimic nu s-ar fi intamplat.
              Era ceva obisnuit si parte din munca zilnica.
            </p>
            <p class="bg-[#ffe8cc]" font-bold>
              Am trecut si eu prin aceasta eperienta, direct si indirect la
              fiecare loc de munca pe care l-am avut.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto mb-32 border-t border-b border-[#495057] pt-10 pb-10">
        <h2 class="text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
          Experienta mea
        </h2>
        <div class="h-[10rem] overflow-y-scroll">
          <p class="mb-5">
            Am simtit pe pielea mea cum e sa lucrez cu oameni care m-au facut sa
            ma simt inutila, incapabila si sa nu mai stiu care e rolul meu
            acolo. Am fost tratata ca si cum nu as avea valoare deloc, am fost
            jignita, am fost umilita.
          </p>
          <p class="mb-5">
            Daca poti sa inchizi ochii si sa iti imaginezi pentru o secunda ca
            esti intr-o sala de sedinte inconjurata de mese si scaune. Toate
            scaunele sunt pline de oameni iar in mijloc tu, in picioare. Toata
            lumea se uita la tine si arata cu degetul. Cum te simti?{" "}
          </p>
          <p class="mb-5">
            Eu cand am trait asta a fost neplacut, dar mai ales lipsit de
            respectul si eticheta de la locul de munca pe care eu le asteptam.
          </p>
          <p class="mb-5">
            Aveam zile in care plangeam la munca si zile in care ma trezeam
            dimineata si plangeam inainte sa plec la munca. Aveam zile in care
            imi doream sa mi se intample ceva ca sa nu mai ajung la munca. A
            fost foarte greu si descurajant, trist si extrem de dureros.
          </p>
          <p class="mb-5">
            Nici nu am degete sa numar de cate ori am plecat la urgente de la
            munca in decursul anilor. Am si clacat de cateva ori cand corpul meu
            a decis ca imi trebuie pauza fortata de la tot ce fac, asa ca m-am
            imbolnavit, am facut pauza putin timp, dar cand am revenit, am
            revenit in acelasi mediu toxic care nu m-a ajutat in vindecare, ba
            chiar a amplificat starile de anxietate, frica, panica si stres
            intens.
          </p>
          <p class="mb-5">
            Am facut parte din companii extraordinare ca si brand in piata
            internationala, insa am invatat ca brandul nu este de ajuns atunci
            cand vorbim despre oameni.
          </p>
          <p class="mb-5">
            Mi-am dorit de multe ori sa fiu auzita, incurajata, apreciata pentru
            munca mea si am primit in schimb critica, desconsiderare si
            umilinta. Mi s-a parut nedrept si frustrant ca se intampla asta
            intr-un context professional, dar, cu toate astea, pentru o perioada
            am acceptat situatia asa cum a fost ea. Am crezut ca e mai valoros
            sa calc pe mine si accept situatia asa cum e pentru ca macar invat
            ceva care imi va folosi.
          </p>
          <p class="mb-5">
            Mi-am dorit sa fiu proactiva, mi-am dorit sa imi pun in valoare
            creativitatea, mi-am dorit sa invat de la oamenii de langa mine, dar
            m-am lovit de zidurile nedreptatii, ale umilitei si ale public
            shamingului.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem] bg-[#343a40] mb-32">
        <div class="flex-1 bg-dark-grey bg-[#343a40]">
          <img
            src={question}
            alt="question-photo"
            class="p-16 bg-[#343a40] h-100 shadow-md"
          />
        </div>
        <div class="flex-1 bg-[#343a40] flex flex-col justify-center items-start ml-auto mr-auto">
          <h2 className="bg-[#343a40] text-white text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
            De ce se intampla acest lucru in companii? - Pentru ca asa acceptam.
          </h2>
          <div class="bg-[#343a40] mr-12">
            <p class="bg-[#343a40] text-white">
              Eu nu am stiut unde si cum sa pun limita acolo unde era nevoie si
              am permis sa ajunga la mine critica, desconsiderarea si umilinta.
              Cand am avut o farama de curaj sa nu stau peste program si sa ma
              respect pe mine am fost certata pentru ca nu impartasesc valoarea
              statului peste program. Acum cand imi aduc aminte mi se pare putin
              amuzant, dar atunci a fost dureros si am simtit ca nu ma regasesc.
            </p>
            <button
              type="button"
              class="bg-[#f0f0f0] text-[#343a40] font-bold tracking-wider text-sm rounded-md py-2 px-4 hover:bg-[#adb5bd] hover:text-white sm:text-base mt-10"
              onClick={toggleNewText}
            >
              {showNewText ? "Ascunde" : "Afla mai mult"}
            </button>
            {showNewText && (
              <div class="font-bold mt-10">
                <p class="bg-[#343a40] text-white text-center mb-8 mt-10">
                  Lucrez de peste 7 ani in departamente de HR, in diverse
                  industrii, si am sesizat, incepand cu prima mea experienta, ca
                  multi oameni sunt intr-un stres continuu, altii ajung la
                  burnout si totusi nu fac nimic in privinta asta. Si stiu cum
                  este pentru ca am fost acolo, nu doar o data. Imi era foarte
                  greu sa deschid ochii si sa vad ca se poate si altfel, pentru
                  ca eram obisnuita cu stresul ca si cand ar fi ceva normal,
                  care vine ca parte din pachetul de beneficii de la job. Stiu,
                  adevarul doare. Dar mai stiu ca eu am reusit sa fac ceva in
                  privinta asta desi mi-a luat peste 10 ani sa aflu ca se poate
                  si altfel, ca exista si companii unde oamenii conteaza, unde
                  se pune focus atat pe dezvoltarea companiei cat si pe
                  dezvoltarea angajatului, nu doar profesional, dar si personal.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto mt-[5rem] mb-32 bg-[#ffe8cc] p-10">
        <div class="flex-1 border-r-2 border-[#495057] flex items-center bg-[#ffe8cc]">
          <h2 class="text-3xl font-bold leading-9 text-center md:text-left bg-[#ffe8cc]">
            Ce am invatat eu dupa toti acesti ani de stres si burnout?
          </h2>
        </div>
        <div class="flex-1 flex flex-col justify-center items-center md:items-start bg-[#ffe8cc]">
          <ul class="list-disc pl-6 bg-[#ffe8cc]">
            <li class="mb-5 bg-[#ffe8cc]">
              Ca nu e nevoie sa astepti sa apara compania ideala care sa iti
              ofere valorile pe care le impartasesti si tu, e foarte bine si
              chiar indicat sa cauti asta, DAR pana o gasesti, pune-te pe tine
              pe primul loc si fa tu pentru tine ceva concret. Daca nu o faci
              tu, nimeni nu o va face. Iar la locul de munca, imi pare rau sa te
              anunt, dar nimeni nu te va menaja asa cum o vei face tu.
            </li>
            <li class="mb-5 bg-[#ffe8cc]">
              Ca pot sa am grija de mine, sa pun limite sanatoase fara sa imi
              fie frica de pierderea locului de munca.
            </li>
            <li class="bg-[#ffe8cc]">Ca nu ma salveaza nimeni.</li>
          </ul>
        </div>
      </div>

      <div class="flex items-center justify-center mb-32">
        <div class="relative w-[90%]">
          <img src={learned} alt="learned" class="w-full" />
          <div class="absolute top-0 left-0 text-xl w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-white text-xl bg-transparent w-[80%] flex flex-col items-center justify-center mt-10">
              <div class="text-white text-xl bg-transparent w-[80%] mb-20">
                <h2 class="text-white text-xl bg-transparent mb-5">
                  Poti sa incepi chiar de acum sa te dai un pas in spate, sa
                  respiri si sa te gandesti.
                </h2>
                <ul class="text-white text-xl bg-transparent list-disc pl-6">
                  <li class="text-white text-xl bg-transparent mb-5">
                    Cine sunt eu si care sunt valorile mele?
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    Ce imi doresc eu cu adevarat de la un loc de munca?
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    Ce inseamna un loc de munca pentru mine?
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    Ce pot sa accept si ce nu accept sub nicio forma?
                  </li>
                </ul>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5">
                <p class="text-white text-xl bg-transparent mb-5">
                  Stiu, este un proces foarte greu, pentru ca necesita vindecare
                  multa, lucru cu tine intens. Este greu sa te dai un pas in
                  spate pentru ca mereu vei gasi scuze precum:
                </p>
                <ul class="list-disc pl-6 text-white text-xl bg-transparent">
                  <li class="mb-5 text-white text-xl bg-transparent">
                    n-am timp de asa ceva acum;
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    asa e peste tot;
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    am multe deadline-uri si nu pot sa ma pun pe mine pe primul
                    loc;
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    lasa ca o sa treaca la un moment dat.
                  </li>
                </ul>
                <p class="font-bold underline text-white text-xl bg-transparent">
                  .....si multe alte scuze.
                </p>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5 mt-10">
                <p class="mb-5 text-white text-xl bg-transparent">
                  Da, stiu, pentru ca si eu le-am tot folosit ca sa fug de
                  responsabilitatea de a ma pune pe primul loc. Aveam atatea
                  scuze pregatite si de multe ori ma surprindeam ca pot gasi
                  mereu altele si altele. Ma surprind acum cu gandul ca puteam
                  sa gasesc solutii, nu scuze. Gandeste-te daca merita cu
                  adevarat sa ramai in burnout si care este pretul pe care il
                  platesti la final de zi.
                </p>
                <p class="mb-5 text-white text-xl bg-transparent">
                  Merita sa te scuzi mereu ca nu ai timp pentru tine, familie,
                  prieteni? Merita sa te simti rau psihic si fizic poate si sa
                  te gandesti mereu ce ai? Merita sa ajungi sa iti dau salariul
                  la spital?
                </p>
                <p class="mb-5 text-white text-xl bg-transparent">
                  Si oricate scuze vei gasi, si oricate “beneficii” ai, nimeni
                  nu vine sa te salveze, doar tu poti face asta.
                </p>
              </div>
              <div class="text-center w-[50%] text-white text-2xl bg-transparent mt-20">
                <p class="font-bold text-white text-xl bg-transparent">
                  Asa ca aici, acum, astazi, te invit sa calatorim impreuna
                  catre cunoasterea de sine, catre identificarea convingerilor
                  care te limiteaza sa mergi inainte, catre crearea unui viitor
                  echilibrat pentru tine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
