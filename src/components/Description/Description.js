import React from "react";
import balance from "../../assets/balance.jpg";

const Description = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-[35rem] mt-10 md:mt-[15rem] sm:mt-10 w-[90%] mx-auto bg-[#343a40]">
      <div class="p-8 md:p-16 bg-[#343a40] text-white">
        <h1 class="text-4xl font-bold mb-6 bg-[#343a40]">Valorile mele</h1>
        <ul class="text-lg leading-10 bg-[#343a40]">
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            Compasiune
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">Empatie</li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            Responsabilitate
          </li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">Respect</li>
          <li class="mb-4 bg-[#343a40] shadow-md rounded-lg px-4">
            Sinceritate
          </li>
        </ul>
      </div>

      <div class="description-right-container">
        <img
          src={balance}
          alt="description img"
          class="w-full md:p-10 bg-[#343a40]"
        />
      </div>
    </div>
  );
};
export default Description;
