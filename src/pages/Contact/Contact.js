import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
    <div>
      <Navbar />
      <div className="mt-[7.5rem] mb-[7.5rem]"></div>
      <div className="mb-[3rem]">
        <p className="mx-auto mb-5 mt-5 w-1/2 items-center text-center text-2xl font-semibold">
          {t("contact:iinviteyou")}
        </p>
        <a
          href="https://bit.ly/3owcQLe"
          className="ml-auto mr-auto flex h-[25%] w-72 cursor-pointer items-center justify-center rounded-md bg-[#343a40] px-6 py-3.5 text-center text-lg font-bold leading-tight tracking-widest text-[#f0f0f0] hover:bg-[#868e96] hover:text-white"
        >
          {t("contact:scheduleameeting")}
        </a>
      </div>
      <div className="mb-[5rem] mt-[6rem]">
        <p className="mx-auto mb-5 mt-5 w-1/2 items-center text-center text-2xl font-semibold">
          {t("contact:youcanfollowmeusingthelinksbelow.")}
        </p>
        <div className="flex justify-center">
          <ul className="flex list-none gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/roxanadum/"
                className="block py-2 text-4xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/DiscoverYourSelfbyRoxana"
                className="block py-2 text-4xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roxana_dumitrescu_coach/"
                className="block py-2 text-4xl  text-[#343a40] hover:text-[#495057]"
              >
                <FaInstagramSquare />
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
