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
    <div class="border-t-2 border-[#495057] bg-[#fff5f5] mb-3">
      <div class="flex flex-wrap justify-between ml-10 mr-10 mt-4 box-container">
        <div class="w-full h-full md:w-1/3">
          <a href="#" class="logo ">
            Roxana Dumitrescu
          </a>
          <p>
            {t(
              "home:iguideyoutoidentifythesourcesofstressandtodeveloptogethereffectivestrategiesinmanagingittofindbalanceinallaspectsofyourlife."
            )}
          </p>
          <ul class="flex gap-4 list-none items-start justify-start mt-5">
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

        <div class="w-full h-full md:w-1/6 flex flex-col text-left sm:mb-[1rem]">
          <h3 class="text-2xl text-black mt-5 text-left">
            {" "}
            {t("home:address")}
          </h3>
          <div class="flex flex-col text-left">
            <p class="text-lg text-gray-600 py-2"> {t("home:bucharest")}</p>
            <p class="text-lg text-gray-600 py-2">
              <i> {t("home:phone")}</i> <b>(+40)74 123 4560</b>
            </p>
            <p class="text-lg text-gray-600 py-2">
              <i>Email:</i> <b>email@gmail.com</b>
            </p>
          </div>
        </div>

        <div class="w-full h-full md:w-1/6 flex flex-col text-left">
          <h3 class="text-2xl text-black text-left">{t("home:links")}</h3>
          <div class="flex flex-col text-left">
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i class="fas fa-arrow-right"></i>
              {t("home:home")}
            </a>
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i class="fas fa-arrow-right"></i>
              {t("home:about")}
            </a>
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i class="fas fa-arrow-right"></i>
              {t("home:products")}
            </a>
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i class="fas fa-arrow-right"></i>
              {t("home:events")}
            </a>
            <a
              href="#"
              class="block py-2 text-lg text-gray-700 hover:underline"
            >
              <i class="fas fa-arrow-right"></i>Contact
            </a>
          </div>
        </div>
      </div>
      {/* <div class="flex justify-center items-center mt-10 mb-5">
        <div class="flex justify-between gap-10">
          <span>
            <a
              href=""
              class="font-bold text-[#343a40] hover:text-[#495057] hover:underline"
            >
              Politica de confidentialitate
            </a>
          </span>
          <span>
            <a
              href=""
              class="font-bold text-[#343a40] hover:text-[#495057] hover:underline"
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
