import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <div class="border-t-4 border-[rgba(0, 0, 0, 0.1)] bg-[#fff5f5]">
    <div class="flex flex-wrap justify-between ml-10 mr-10 mt-4 box-container">
      <div class="flex-wrap md:flex-1 md:flex-grow-0 w-[25rem]">
        <a href="#" class="navbar-logo ">
          Roxana Dumitrescu
        </a>
        <p>
          Te ghidez sa identifici sursele de stres si sa dezvoltam impreuna
          strategii eficiente in gestionarea acestuia, pentru a gasi echilibru
          in toate aspectele vietii tale.
        </p>
        <ul class="flex gap-4 list-none items-start justify-start">
          <li class="p__opensans">
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:bg-[#343a40]"
            >
              <FaLinkedin />
            </a>
          </li>
          <li class="p__opensans">
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:bg-[#343a40]"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li class="p__opensans">
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:bg-[#343a40]"
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li class="p__opensans">
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:bg-[#343a40]"
            >
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div>

      <div class="box">
        <h3 class="text-2xl text-black">Adresa</h3>
        <div class="address">
          <p class="text-lg text-gray-600 py-2">Bucuresti</p>
          <p class="text-lg text-gray-600 py-2">
            <i>Telefon:</i> <b>(+40)74 123 4560</b>
          </p>
          <p class="text-lg text-gray-600 py-2">
            <i>Email:</i> <b>email@gmail.com</b>
          </p>
        </div>
      </div>

      <div class="box">
        <h3 class="text-2xl text-black">Linkuri</h3>
        <div class="py-4">
          <a href="#" class="block py-2 text-lg text-gray-700 hover:underline">
            <i class="fas fa-arrow-right"></i>Acasa
          </a>
          <a href="#" class="block py-2 text-lg text-gray-700 hover:underline">
            <i class="fas fa-arrow-right"></i>Despre
          </a>
          <a href="#" class="block py-2 text-lg text-gray-700 hover:underline">
            <i class="fas fa-arrow-right"></i>Produse
          </a>
          <a href="#" class="block py-2 text-lg text-gray-700 hover:underline">
            <i class="fas fa-arrow-right"></i>Evenimente si Workshopuri
          </a>
          <a href="#" class="block py-2 text-lg text-gray-700 hover:underline">
            <i class="fas fa-arrow-right"></i>Contact
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
