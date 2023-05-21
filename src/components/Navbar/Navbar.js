import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "../../styles/tailwind.css";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 20 * 30) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation(["home"]);

  return (
    <nav class="navbar sticky top-0 w-full flex justify-between items-center px-4 py-2 border-b-2 border-[#495057]">
      <div class="logo ml-10">
        <p>Roxana Dumitrescu</p>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between">
        <ul className="navbar-links flex justify-center items-center text-xl list-none">
          <li className="mx-4 cursor-pointer">
            <NavLink
              to="/"
              className="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
              activeclassname="text-white bg-[#343a40] border rounded-lg"
            >
              {t("home:home")}
            </NavLink>
          </li>
          <li className="mx-4 cursor-pointer">
            <NavLink
              to="/about"
              className="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
              activeclassname="text-white bg-[#343a40] border rounded-lg"
            >
              {t("home:about")}
            </NavLink>
          </li>
          <li className="mx-4 cursor-pointer">
            <NavLink
              to="/solutions"
              className="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
              activeclassname="text-white bg-[#343a40] border rounded-lg"
            >
              {t("home:products")}
            </NavLink>
          </li>
          <li className="mx-4 cursor-pointer">
            <NavLink
              to="/events"
              className="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
              activeclassname="text-white bg-[#343a40] border rounded-lg"
            >
              {t("home:events")}
            </NavLink>
          </li>
          <li className="mx-4 cursor-pointer">
            <NavLink
              to="/contact"
              className="hover:text-white hover:bg-[#343a40] hover:border hover:rounded-lg p-1"
              activeclassname="text-white bg-[#343a40] border rounded-lg"
            >
              Contact
            </NavLink>
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
      <div>
        <GiHamburgerMenu
          color="var(--color-black)"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          class="flex md:hidden mr-5 cursor-pointer"
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
            <div class="absolute top-0 left-0">
              <LanguageDropdown class="md:hidden" />
            </div>
          </div>
        )}
      </div>
      <LanguageDropdown class="language hidden md:flex md:items-center md:justify-between sm:hidden ml-5" />
    </nav>
  );
};

export default Navbar;
