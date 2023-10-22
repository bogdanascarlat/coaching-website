/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


import { useTranslation } from "react-i18next";

const Footer = () => {
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
    <div className="mb-3 border-t-2 border-[#495057] bg-[#fff5f5]">
      <div className="container mt-4 flex flex-wrap justify-between">
        <div className="h-full w-full md:w-1/3">
          <a href="#" className="logo ">
            Roxana Dumitrescu
          </a>
          <p>
            {t(
              "home:iguideyoutoidentifythesourcesofstressandtodeveloptogethereffectivestrategiesinmanagingittofindbalanceinallaspectsofyourlife."
            )}
          </p>
          <ul className="mt-5 flex list-none items-start justify-start gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/roxanadum/"
                className="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/DiscoverYourSelfbyRoxana"
                className="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roxana_dumitrescu_coach/"
                className="block py-2 text-3xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex h-full w-full flex-col text-left sm:mb-[1rem] md:w-1/6">
          <h3 className="mt-5 text-left text-2xl text-black font-bold">
            {t("home:contact")}
          </h3>
          <div className="flex flex-col text-left">
            <p className="py-2 text-lg text-gray-600"><span className="font-bold">{t("home:address")}</span> {t("home:bucharest")}</p>
            <p className="py-2 text-lg text-gray-600">
              <span className="font-bold">Email:</span> <b>roxana.dumitrescu.coach@gmail.com</b>
            </p>
          </div>
        </div>

        <div className="flex h-full w-full flex-col text-left md:w-1/6">
          <h3 className="mt-5 text-left text-2xl text-black font-bold">{t("home:links")}</h3>
          <div className="flex flex-col text-left">
          <ul className="">
            <li>
              <NavLink
                to="/"
                className="py-2 text-lg text-gray-700 hover:underline"
              >
                {t("home:home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="py-2 text-lg text-gray-700 hover:underline"
              >
                {t("home:about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className="py-2 text-lg text-gray-700 hover:underline"
              >
                {t("home:products")}
              </NavLink>
            </li>
            <li className="relative">
              <div className="relative inline-flex items-center">
                <button
                  onClick={toggleDropdown}
                  className="text-lg text-gray-700 hover:underline"
                >
                  <div className="flex items-center">
                    <span className="mr-1">{t('home:events')}</span>
                    <span>
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
                    </span>
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-[8rem] top-1 w-[8rem] z-10 bg-primary border border-gray-300">
                    {options.map((item) => (
                      <ul>
                        <NavLink
                          key={item.link}
                          to={item.link}
                          className="py-2 text-lg text-white hover:underline"
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
                className="z-100 py-2 text-lg text-gray-700 hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
            {/* <a
              href="#"
              className="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i className="fas fa-arrow-right"></i>
              {t("home:home")}
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i className="fas fa-arrow-right"></i>
              {t("home:about")}
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i className="fas fa-arrow-right"></i>
              {t("home:products")}
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i className="fas fa-arrow-right"></i>
              {t("home:events")}
            </a>
            <a
              href="#"
              className="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i className="fas fa-arrow-right"></i>Contact
            </a> */}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-10 mb-5">
        <div className="flex justify-between gap-10">
          <span>
            <a
              href=""
              className="font-bold text-[#343a40] hover:text-[#495057] hover:underline"
            >
              Politica de confidentialitate
            </a>
          </span>
          <span>
            <a
              href=""
              className="font-bold text-[#343a40] hover:text-[#495057] hover:underline"
            >
              Termeni si conditii
            </a>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
