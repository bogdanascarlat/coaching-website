import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import invite from "../../assets/invite.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem]">
        <img
          src={invite}
          alt="presentation-photo"
          class="w-full md:w-[35rem] mr-[5rem]"
        />
        <div class="justify-center items-center my-auto">
          <h1 class="text-4xl font-bold md:mb-16 leading-9 sm:text-4xl sm:mt-3 sm:mb-3 text-center">
            Buna!
          </h1>
          <p class="text-lg mb-5 leading-relaxed sm:text-base text-center">
            Sunt Roxana si te invit sa identificam impreuna sursele de stres si
            sa dezvoltam strategii eficiente in gestionarea acestuia, pentru a
            gasi echilibru in toate aspectele vietii tale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
