import React from "react";
import balance from "../../assets/balance.jpg";
import "./Description.css";

const Description = () => {
  return (
    <div class="grid grid-cols-2 gap-4 mb-[35rem] mt-[15rem] w-[90%] ml-auto mr-auto bg-[#343a40]">
      <div class="bg-[#343a40] ml-20 align-middle mt-auto mb-auto">
        <h1 class="text-4xl font-bold mb-6 bg-dark-grey text-white bg-[#343a40] ">
          Valorile mele
        </h1>
        <p class="text-white text-lg leading-10 bg-[#343a40]">
          Compasiune
          <hr />
        </p>
        <p class="text-white text-lg leading-10 bg-[#343a40]">
          Empatie
          <hr />
        </p>
        <p class="text-white text-lg leading-10 bg-[#343a40]">
          Responsabilitate
          <hr />
        </p>
        <p class="text-white text-lg leading-10 bg-[#343a40]">
          Respect
          <hr />
        </p>
        <p class="text-white text-lg leading-10 bg-[#343a40]">
          Sinceritate
          <hr />
        </p>
      </div>

      <div class="description-right-container bg-[#343a40]">
        <img
          src={balance}
          alt="description img"
          class="w-1/2 md:w-full p-10 bg-[#343a40]"
        />
      </div>
    </div>
  );
};

export default Description;
