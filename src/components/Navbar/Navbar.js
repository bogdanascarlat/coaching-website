import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Navbar.css";
import "../../styles/tailwind.css";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav class="w-full flex justify-between items-center px-4 py-2 border-b-2 border-[#495057]">
      <div class="logo ml-10">
        <p>Roxana Dumitrescu</p>
      </div>
      <div class="hidden md:flex md:items-center md:justify-between">
        <ul class="navbar-links flex justify-center items-center text-xl list-none">
          <li class="mx-4 cursor-pointer">
            <a
              href="#home"
              class="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
            >
              Acasa
            </a>
          </li>
          <li class="mx-4 cursor-pointer">
            <a
              href="#about"
              class="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
            >
              Despre
            </a>
          </li>
          <li class="mx-4 cursor-pointer">
            <a
              href="#solutions"
              class="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
            >
              Solutii
            </a>
          </li>
          <li class="mx-4 cursor-pointer">
            <a
              href="#events"
              class="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
            >
              Evenimente si Workshopuri
            </a>
          </li>
          <li class="mx-4 cursor-pointer">
            <a
              href="#contact"
              class="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between">
        <ul class="social-links flex gap-4 list-none items-start justify-start">
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
      <LanguageDropdown class="language hidden md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between" />
      <div>
        <GiHamburgerMenu
          color="var(--color-black)"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          class="flex md:hidden"
        />
        {toggleMenu && (
          <div class="fixed top-0 left-0 w-full h-screen transition duration-500 ease-in-out flex flex-col z-50">
            <MdClose
              fontSize={27}
              class="overlay__close text-2xl cursor-pointer absolute top-4 right-4"
              onClick={() => setToggleMenu(false)}
            />
            <ul class="list-none">
              <li class="my-8 cursor-pointer text-black text-2xl font-medium text-center font-sans hover:text-[#343a40]">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Acasa
                </a>
              </li>
              <li class="my-8 cursor-pointer text-black text-2xl font-medium text-center font-sans hover:text-[#343a40]">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Despre
                </a>
              </li>
              <li class="my-8 cursor-pointer text-black text-2xl font-medium text-center font-sans hover:text-[#343a40]">
                <a href="#solutions" onClick={() => setToggleMenu(false)}>
                  Solutii
                </a>
              </li>
              <li class="my-8 cursor-pointer text-black text-2xl font-medium text-center font-sans hover:text-[#343a40]">
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Evenimente si Workshopuri
                </a>
              </li>
              <li class="my-8 cursor-pointer text-black text-2xl font-medium text-center font-sans hover:text-[#343a40]">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <div class="flex justify-center">
              <ul class="list-none flex gap-5">
                <li>
                  <a
                    href="#"
                    class="py-2 text-3xl text-[#343a40] hover:text-[#495057]"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 text-3xl text-[#343a40] hover:text-[#495057]"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 text-3xl text-[#343a40] hover:text-[#495057]"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="py-2 text-3xl text-[#343a40] hover:text-[#495057]"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
              </ul>
            </div>
            <LanguageDropdown class="flex justify-center" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
