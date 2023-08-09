/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["home"]);

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
            {t("home:address")}
          </h3>
          <div className="flex flex-col text-left">
            <p className="py-2 text-lg text-gray-600"> {t("home:bucharest")}</p>
            <p className="py-2 text-lg text-gray-600">
              <i> {t("home:phone")}</i> <b>(+40)74 123 4560</b>
            </p>
            <p className="py-2 text-lg text-gray-600">
              <i>Email:</i> <b>email@gmail.com</b>
            </p>
          </div>
        </div>

        <div className="flex h-full w-full flex-col text-left md:w-1/6">
          <h3 className="mt-5 text-left text-2xl text-black font-bold">{t("home:links")}</h3>
          <div className="flex flex-col text-left">
            <a
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
            </a>
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
