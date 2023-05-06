import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./Comparison.css";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

const Comparison = () => {
  return (
    <div class="w-full h-96 relative mx-auto mb-80 pt-40">
      <div class="flex absolute left-20 -top-80 bg-transparent">
        <div class="w-full lg:w-1/2 flex justify-center items-center mr-20 bg-transparent">
          <img src={before} alt="before" class="h-auto max-w-full z-10" />
        </div>
        <div class="w-full lg:w-1/2 mr-20 mt-10">
          <h2 class="text-2xl font-semibold mb-4">
            Inainte de a apela la un coach:
          </h2>
          <div class="max-w-2xl mx-auto text-left overflow-y-scroll h-48">
            <p class="text-lg font-semibold mb-4">
              Ma luptam cu sentimente coplesitoare de stres, anxietate si
              epuizare. In calitate de profesionist, m-am trezit adesea ca imi
              sacrificam viata personala si relatiile pentru a raspunde
              cerintelor profesionale.
            </p>
            <p class="text-lg font-semibold">
              Am fost constant suprasolicitata si mi-am neglijat propriile nevoi
              fizice si emotionale, ceea ce a dus la epuizare si intr-un final
              la boala. Imi era din ce in ce mai greu sa ma concentrez, dar tot
              imi ignoram sanatatea si puneam munca pe primul loc. Imi era frica
              sa ma aleg pe mine. Stiam ca trebuie sa schimb ceva, dar nu stiam
              exact ce sa fac si de unde sa incep, macinata fiind de teama ca as
              putea sa imi pierd locul de munca.
            </p>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center text-center bg-[#ffe8cc]">
        <div class="bg-[#ffe8cc]">
          <q class="text-3xl font-bold block mb-2 bg-[#ffe8cc]">
            Balance is the perfect state of still water. Let that be our model.
          </q>
          <p class="text-lg font-bold bg-[#ffe8cc]">
            &#8211; Confucius &#8211;
          </p>
        </div>
      </div>

      <div class="absolute right-20 -bottom-80 bg-transparent">
        <div class="flex items-center bg-transparent">
          <div class="max-w-2xl mx-auto text-left h-40 overflow-y-scroll">
            <h2 class="text-2xl font-semibold mb-4">
              Dupa ce am lucrat cu un coach:
            </h2>
            <p class="text-lg font-semibold mb-4">
              Am reusit sa gasesc echilibrul intre munca si viata personala. Am
              reusit sa stabilesc limite clare si sanatoase la locul de munca.
              Am invatat sa imi spun mie “DA”. Acum acord prioritate ingrijirii
              mele personale si ma asigur ca fac pauza cand am nevoie, imi
              folosesc timpul liber pentru a ma recrea, ma plimb, citesc si am
              timp pentru familia mea.
            </p>
            <p class="text-lg font-semibold">
              Am reusit sa identific radacina stresului, ceea ce a condus si la
              o comunicare mai buna cu cei din jur si la un mediu de lucru mai
              sanatos. Acum pot fi pe deplin prezenta atat in viata personala
              cat si cea profesionala, iar productivitatea mea a crescut
              semnificativ. Am o viata echilibrata si implinita si asta ma face
              fericita.
            </p>
          </div>
          <div class="w-full lg:w-1/2 flex justify-center items-center ml-20 bg-transparent">
            <img src={after} alt="after" class="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
