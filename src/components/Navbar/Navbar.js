/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navbar = useRef(null);
  const navbarPlaceholder = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const navbarHeight = navbar.current.offsetHeight;
        if (scrollY > 0) {
          navbar.current.classList.add("sticky");
          navbarPlaceholder.current.style.height = `${navbarHeight}px`;
        } else {
          navbar.current.classList.remove("sticky");
          navbarPlaceholder.current.style.height = "0px";
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation(["home"]);

  return (
    <>
      <div className="header-placeholder w-full" ref={navbarPlaceholder} />
      <nav className="header" ref={navbar}>
        <div className="container flex items-center justify-between">
          <div className="logo">
            <a href="/">Roxana Dumitrescu</a>
          </div>
          <ul className="navigation hidden list-none items-center justify-center text-base lg:flex lg:items-center lg:justify-between 2xl:text-xl">
            <li>
              <NavLink
                to="/"
                className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
              >
                {t("home:home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
              >
                {t("home:about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
              >
                {t("home:products")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
              >
                {t("home:events")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="socials hidden lg:flex lg:items-center lg:justify-between">
            <ul className="social-links flex list-none items-start justify-start gap-4">
              <li>
                <a
                  href="#"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-2xl text-primary hover:text-primary/90 2xl:text-3xl"
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
              className="flex cursor-pointer lg:hidden"
            />
            {toggleMenu && (
              <div className="mobile-nav">
                <div className="container">
                  <div className="flex items-center justify-between py-2">
                    <LanguageDropdown className="language-selector" />
                    <MdClose
                      fontSize={27}
                      className="overlay__close cursor-pointer text-2xl"
                      onClick={() => setToggleMenu(false)}
                    />
                  </div>
                  <ul className="list-none">
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <a href="/" onClick={() => setToggleMenu(false)}>
                        Acasa
                      </a>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <a href="about" onClick={() => setToggleMenu(false)}>
                        Despre
                      </a>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <a href="solutions" onClick={() => setToggleMenu(false)}>
                        Solutii
                      </a>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <a href="events" onClick={() => setToggleMenu(false)}>
                        Evenimente si Workshopuri
                      </a>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <a href="contact" onClick={() => setToggleMenu(false)}>
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <ul className="flex list-none gap-5">
                      <li>
                        <a
                          href="#"
                          className="py-2 text-3xl text-primary hover:text-primary/90"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 text-3xl text-primary hover:text-primary/90"
                        >
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 text-3xl text-primary hover:text-primary/90"
                        >
                          <FaInstagramSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="py-2 text-3xl text-primary hover:text-primary/90"
                        >
                          <FaTwitterSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <LanguageDropdown className="language-selector hidden lg:flex lg:items-center lg:justify-between" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
