import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import invite from "../../assets/invite.jpg";
import writing from "../../assets/about1.jpg";
import started from "../../assets/about2.jpg";
import question from "../../assets/about3.jpg";
import learned from "../../assets/about4.jpg";

import { useTranslation } from "react-i18next";

const About = () => {
  const [showNewText, setShowNewText] = useState(false);

  const toggleNewText = () => {
    setShowNewText(!showNewText);
  };

  const { t } = useTranslation(["about"]);
  return (
    <div>
      <Navbar />
      <div className="mb-[6rem] ml-auto mr-auto mt-[6rem] grid w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src={invite}
          alt="presentation"
          className="mr-[5rem] w-full md:w-[35rem]"
        />
        <div className="my-auto items-center justify-center">
          <h1 className="sliding-paragraph text-center text-4xl font-bold leading-9 sm:mb-3 sm:mt-5 sm:text-4xl md:mb-16">
            {t("about:hello")}
          </h1>
          <p className="mb-5 text-center text-2xl leading-relaxed my-10 md:my-0 xl:my-0">
            {t("about:intro")}
          </p>
        </div>
      </div> 
      <div className="mb-[6rem] flex items-center justify-center">
        <div className="relative w-[90%]">
          <img src={writing} alt="writing" className="w-full" />
          <div className="md:absolute left-0 top-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-xl">
            <div className="w-[80%] md:text-justify bg-transparent text-xl text-white my-10 md:my-0 xl:my-0">
              <div className="mb-20">
                <p className="mb-5 bg-transparent text-white">
                  {t("about:p1")}
                </p>
                <p className="bg-transparent text-white">
                  {t("about:p2")}
                </p>
              </div>
              <div className="mb-5">
                <p className="mb-5 bg-transparent text-white">
                  {t("about:p3")}
                </p>
                <h2 className="bg-transparent text-2xl font-bold text-white">
                  {t("about:p4")}
                </h2>
                <p className="bg-transparent text-white">
                  {t("about:p5")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-32 mt-[5rem] grid w-[90%] grid-cols-1 gap-10 md:grid-cols-2">
        <div className="mx-auto my-auto">
          <h2 className="text-3xl font-bold leading-9 sm:mb-3 sm:mt-3 my-10 md:my-5 xl:my-5">
            {t("about:started")}
          </h2>
          <p className="mb-5 text-xl leading-relaxed">
            {t("about:startedtext")}
          </p>
        </div>
        <img src={started} alt="student" className="w-full" />
      </div>
      <div className="mx-auto mb-32 mt-[5rem] h-full w-[90%]">
        <div className="h-full bg-[#ffe8cc] p-10">
          <div className="mb-5 bg-[#ffe8cc]">
            <h2 className="bg-[#ffe8cc] font-bold">{t("about:reality")}</h2>
            <p className="bg-[#ffe8cc]">{t("about:management")}</p>
          </div>
          <div className="mb-5 bg-[#ffe8cc]">
            <h2 className="bg-[#ffe8cc] font-bold">
              {t("about:corporations")}
            </h2>
            <p className="bg-[#ffe8cc]">{t("about:burnouttext")}</p>
          </div>
          <div className="mb-5 bg-[#ffe8cc]">
            <h2 className="bg-[#ffe8cc] font-bold">{t("about:whattheydid")}</h2>
            <p className="bg-[#ffe8cc]">{t("about:facts")}</p>
            <p className="bg-[#ffe8cc]" font-bold>
              {t("about:facts")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[6rem] w-[90%] border-t border-b md:border-t lg:border-b lg:border-t border-[#495057] pb-10 pt-10">
        <h2 className="text-3xl font-bold leading-9 sm:mb-3 sm:mt-3 md:mb-14 my-10 md:my-5 xl:my-5">
          {t("about:experience")}
        </h2>
        <div className="h-auto md:h[10rem] lg:h-[10rem] overflow-y-scroll my-0 md:my-5 xl:my-5">
          <p className="mb-5">{t("about:expp1")}</p>
          <p className="mb-5">{t("about:expp2")}</p>
          <p className="mb-5">{t("about:expp3")}</p>
          <p className="mb-5">{t("about:expp4")}</p>
          <p className="mb-5">{t("about:expp5")}</p>
          <p className="mb-5">{t("about:expp6")}</p>
          <p className="mb-5">{t("about:expp7")}</p>
          <p className="mb-5">{t("about:expp8")}</p>
        </div>
      </div>
      <div className="mb-[6rem] md:mb-[6rem] xl:mb-[6rem] ml-auto mr-auto mt-[6rem] md:mt-[6rem] xl:mt-[6rem] grid w-[90%] grid-cols-1 gap-4 bg-[#343a40] md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-dark-grey flex-1 bg-[#343a40]">
          <img
            src={question}
            alt="question"
            className="h-100 bg-[#343a40] p-16 shadow-md"
          />
        </div>
        <div className="ml-auto text-center md:text-justify lg:text-justify mr-auto flex flex-1 flex-col items-start justify-center bg-[#343a40]">
          <h2 className="bg-[#343a40] text-3xl font-bold leading-9 text-white mb-6 mr-12 md:mb-14 lg:mb-14 sm:mt-3">
            {t("about:why")}
          </h2>
          <div className="mr-12 bg-[#343a40]">
            <p className="bg-[#343a40] text-white">{t("about:limit")}</p>
            <button
              type="button"
              className="mt-10 mb-10 ml-10 md:ml-0 lg:ml-0 md:mb-0 lg:mb-0 rounded-md bg-[#f0f0f0] px-4 py-2 text-sm font-bold tracking-wider text-[#343a40] hover:bg-[#adb5bd] hover:text-white sm:text-base"
              onClick={toggleNewText}
            >
              {showNewText ? t("about:hide") : t("about:findmore")}
            </button>
            {showNewText && (
              <div className="mt-10 font-bold">
                <p className="mb-8 mt-10 bg-[#343a40] text-center text-white">
                  {t("about:findtext")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto mb-32 mt-[5rem] grid w-[90%] grid-cols-1 gap-4 bg-[#ffe8cc] p-10 md:grid-cols-2">
        <div className="flex flex-1 items-center border-r-2 border-[#495057] bg-[#ffe8cc]">
          <h2 className="bg-[#ffe8cc] text-center text-3xl font-bold leading-9 md:text-left mr-4">
            {t("about:learned")}
          </h2>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-[#ffe8cc] md:items-start ml-6">
          <ul className="list-disc bg-[#ffe8cc] pl-6">
            <li className="mb-5 bg-[#ffe8cc]">{t("about:learnedp1")}</li>
            <li className="mb-5 bg-[#ffe8cc]">{t("about:learnedp2")}</li>
            <li className="bg-[#ffe8cc]">{t("about:learnedp3")}</li>
          </ul>
        </div>
      </div>
      <div className="mb-32 flex items-center justify-center">
        <div className="relative w-[90%]">
          <img src={learned} alt="learned" className="w-full md:block hidden" />
          <div className="md:absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-xl">
            <div className="mt-10 flex w-[80%] flex-col items-center justify-center bg-transparent text-xl text-white">
              <div className="mb-20 w-[80%] bg-transparent text-xl text-white">
                <h2 className="mb-5 bg-transparent text-xl text-white">
                  {t("about:endtext")}
                </h2>
                <ul className="list-disc bg-transparent pl-6 text-xl text-white">
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:endtextp1")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:endtextp2")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:endtextp3")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:endtextp4")}
                  </li>
                </ul>
              </div>
              <div className="mb-5 w-[80%] bg-transparent text-xl text-white">
                <p className="mb-5 bg-transparent text-xl text-white">
                  {t("about:process")}
                </p>
                <ul className="list-disc bg-transparent pl-6 text-xl text-white">
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:processp1")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:processp2")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:processp3")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl text-white">
                    {t("about:processp4")}
                  </li>
                </ul>
                <p className="bg-transparent text-xl font-bold text-white underline">
                  {t("about:processp5")}
                </p>
              </div>
              <div className="mb-5 mt-10 w-[80%] bg-transparent text-xl text-white">
                <p className="mb-5 bg-transparent text-xl text-white">
                  {t("about:endtext1")}
                </p>
                <p className="mb-5 bg-transparent text-xl text-white">
                  {t("about:exndtext2")}
                </p>
                <p className="mb-5 bg-transparent text-xl text-white">
                  {t("about:endtext3")}
                </p>
              </div>
              <div className="mt-20 mb-10 w-[50%] bg-transparent text-center text-2xl text-white">
                <p className="bg-transparent text-xl font-bold text-white">
                  {t("about:endtext4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
