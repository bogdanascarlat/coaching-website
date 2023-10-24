/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookSquare,
  FaLinkedin,
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
  
  const options = [
    { link: '/podcast', label: t('home:podcast') },
    { link: '/programs', label: t('home:programs') },
    { link: '/workshops', label: t('home:workshops') },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="header-placeholder w-full" ref={navbarPlaceholder} />
      <nav className="header" ref={navbar}>
        <div className="container flex items-center justify-between">
          <div className="logo">
            <a href="/">Roxana Dumitrescu</a>
          </div>
          <ul className="navigation hidden list-none items-center justify-center text-base lg:flex lg:items-center lg:justify-between 2xl:text-xl z-100">
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
            <li className="mx-2 relative z-50">
              <div className="relative inline-flex items-center z-50">
                <button
                  onClick={toggleDropdown}
                  className="group px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white inline-flex items-center"
                >
                  <div className="flex items-center">
                    <span className="mr-1 group-hover:text-white">{t('home:events')}</span>
                    <span className="group-hover:text-white">
                    <svg
                        className="h-5 w-5 text-primary group-hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 z-50 w-[10rem] bg-primary border border-gray-300">
                    {options.map((item) => (
                      <ul>
                        <NavLink
                          key={item.link}
                          to={item.link}
                          className="px-4 py-2 text-lg text-white hover:underline"
                        >
                          <span className="mr-1">{item.label}</span>
                        </NavLink>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
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
                  href="https://www.linkedin.com/in/roxanadum/"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/DiscoverYourSelfbyRoxana"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/roxana_dumitrescu_coach/"
                  className="block text-2xl text-primary  hover:text-primary/90 2xl:text-3xl"
                >
                  <FaInstagramSquare />
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
                      <NavLink
                        to="/"
                        onClick={() => setToggleMenu(false)}
                        className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90"
                      >
                        {t("home:home")}
                      </NavLink>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <NavLink
                        to="/about"
                        onClick={() => setToggleMenu(false)}
                        className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
                      >
                        {t("home:about")}
                      </NavLink>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <NavLink
                        to="/solutions"
                        onClick={() => setToggleMenu(false)}
                        className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
                      >
                        {t("home:products")}
                      </NavLink>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90 z-100" style={{ zIndex: 100 }}>
                      <div className="relative inline-flex z-100" style={{ zIndex: 100 }}>
                        <button
                          onClick={toggleDropdown}
                          className="px-4 py-2 hover:rounded-lg hover:text-primary/90 inline-flex items-center"
                        >
                          <span className="mr-1">{t('home:events')}</span>
                          <svg
                            className="h-5 w-5 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute left-[11rem] top-4 w-[8rem] z-10 bg-primary border border-gray-300 justify-start">
                            {options.map((item) => (
                              <ul className="justify-start">
                                <NavLink
                                  key={item.link}
                                  to={item.link}
                                  className="py-2 pl-2 text-lg text-white hover:underline flex justify-start"
                                >
                                  <span className="mr-1">{item.label}</span>
                                </NavLink>
                              </ul>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                    <li className="my-8 cursor-pointer text-center font-sans text-2xl font-medium text-primary hover:text-primary/90">
                      <NavLink
                        to="/contact"
                        className="mx-2 px-4 py-2 hover:rounded-lg hover:bg-primary hover:text-white"
                      >
                        Contact
                      </NavLink>
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
