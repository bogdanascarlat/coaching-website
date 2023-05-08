import React from "react";
import "./Form.css";

const Form = () => (
  <div class="w-[50%] mx-auto pb-20">
    <div class="w-30">
      <h1 class="text-3xl font-bold mb-3 text-center">Trimite un mesaj</h1>
      <form
        action=""
        class="text-center p-4 border-8 border-[#495057] rounded-3xl mt-10"
      >
        <div class="flex justify-around gap-5">
          <input
            type="text"
            placeholder="nume"
            class="p-6  text-[#495057] border-solid border-2 border-gray-400 rounded-md w-1/2 my-4"
          />
          <input
            type="text"
            placeholder="email"
            class="p-6  text-[#495057] border-solid border-2 border-gray-400 rounded-md w-1/2 my-4"
          />
        </div>
        <textarea
          placeholder="mesaj"
          name=""
          id=""
          cols="30"
          rows="10"
          class="p-4 text-lg font-normal leading-6 tracking-wide text-gray-700 placeholder-gray-400 border border-2 border-gray-400 rounded-lg  resize-none w-full h-40 md:h-60 lg:h-72 "
        ></textarea>
        <input
          type="submit"
          value="TRIMITE MESAJUL"
          class="bg-[#343a40] text-white font-bold tracking-wide uppercase py-2 px-6 rounded-2xl cursor-pointer w-52 hover:bg-[#495057] hover:text-[#f0f0f0] text-base"
        />
      </form>
    </div>
  </div>
);

export default Form;
