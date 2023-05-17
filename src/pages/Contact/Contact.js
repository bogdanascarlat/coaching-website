import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <p class="text-center items-center text-2xl font-semibold w-1/2 mx-auto mt-5">
        Trimite-mi acum un mesaj.
      </p> */}
      <div className="mt-[3rem]">
        <Form />
      </div>
      <div class="mb-[3rem]">
        <p class="text-center items-center text-2xl font-semibold w-1/2 mx-auto mt-5 mb-5">
          Te invit la o sesiune <b>gratuita</b> pentru a ne cunoaste si a
          descoperi cum te pot ajuta sa devii o versiune mai buna a ta.
        </p>
        <a
          href="https://bit.ly/3owcQLe"
          class="bg-[#343a40] text-[#f0f0f0] font-bold tracking-widest leading-tight text-lg py-2 px-6 ml-auto mr-auto rounded-md cursor-pointer h-[25%] text-center hover:bg-[#868e96] hover:text-white flex justify-center items-center xs:w-[30%] md:w-[20%]"
        >
          Programeaza o sedinta
        </a>
      </div>
      <div class="mb-[5rem] ">
        <p class="text-center items-center text-2xl font-semibold w-1/2 mx-auto mt-5 mb-5">
          Ma poti urmari folosind link-urile de mai jos.
        </p>
        <div class="flex justify-center">
          <ul class="flex gap-4 list-none">
            <li>
              <a
                href="#"
                class="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 text-3xl text-[#343a40] hover:text-[#495057]"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
