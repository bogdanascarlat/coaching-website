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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem] mb-32">
        <img
          src={invite}
          alt="presentation-photo"
          class="w-full md:w-[35rem] mr-[5rem]"
        />
        <div class="justify-center items-center my-auto">
          <h1 class="text-4xl font-bold md:mb-16 leading-9 sm:text-4xl sm:mt-3 sm:mb-3 text-center">
            {t("about:hello")}
          </h1>
          <p class="text-2xl mb-5 leading-relaxed  text-center">
            {t("about:intro")}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center mb-32">
        <div class="relative w-[90%]">
          <img src={writing} alt="writing" class="w-full" />
          <div class="absolute top-0 left-0 text-xl w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-white text-xl bg-transparent w-[80%] flex flex-col items-center justify-center">
              <div class="text-white text-xl bg-transparent w-[80%] mb-20">
                <p class="text-white text-xl bg-transparent mb-5">
                  {t("about:p1")}
                </p>
                <p class="text-white text-xl bg-transparent">{t("about:p2")}</p>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5">
                <p class="text-white text-xl bg-transparent mb-5">
                  {t("about:p3")}
                </p>
                <h2 class="font-bold text-white text-2xl bg-transparent">
                  {t("about:p4")}
                </h2>
                <p class="text-white text-xl bg-transparent">{t("about:p5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] mx-auto mt-[5rem] mb-32">
        <div class="my-auto mx-auto">
          <h2 class="text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
            {t("about:started")}
          </h2>
          <p class="text-xl mb-5 leading-relaxed">{t("about:startedtext")}</p>
        </div>
        <img src={started} alt="student-photo" class="w-full" />
      </div>
      <div class="w-[90%] h-full mx-auto mt-[5rem] mb-32">
        <div class="bg-[#ffe8cc] h-full p-10">
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc] font-bold">{t("about:reality")}</h2>
            <p class="bg-[#ffe8cc]">{t("about:management")}</p>
          </div>
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc] font-bold">{t("about:corporations")}</h2>
            <p class="bg-[#ffe8cc]">{t("about:burnouttext")}</p>
          </div>
          <div class="bg-[#ffe8cc] mb-5">
            <h2 class="bg-[#ffe8cc] font-bold">{t("about:whattheydid")}</h2>
            <p class="bg-[#ffe8cc]">{t("about:facts")}</p>
            <p class="bg-[#ffe8cc]" font-bold>
              {t("about:facts")}
            </p>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto mb-32 border-t border-b border-[#495057] pt-10 pb-10">
        <h2 class="text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
          {t("about:experience")}
        </h2>
        <div class="h-[10rem] overflow-y-scroll">
          <p class="mb-5">{t("about:expp1")}</p>
          <p class="mb-5">{t("about:expp2")}</p>
          <p class="mb-5">{t("about:expp3")}</p>
          <p class="mb-5">{t("about:expp4")}</p>
          <p class="mb-5">{t("about:expp5")}</p>
          <p class="mb-5">{t("about:expp6")}</p>
          <p class="mb-5">{t("about:expp7")}</p>
          <p class="mb-5">{t("about:expp8")}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mt-[5rem] bg-[#343a40] mb-32">
        <div class="flex-1 bg-dark-grey bg-[#343a40]">
          <img
            src={question}
            alt="question-photo"
            class="p-16 bg-[#343a40] h-100 shadow-md"
          />
        </div>
        <div class="flex-1 bg-[#343a40] flex flex-col justify-center items-start ml-auto mr-auto">
          <h2 className="bg-[#343a40] text-white text-3xl font-bold md:mb-14 leading-9 sm:mt-3 sm:mb-3">
            {t("about:why")}
          </h2>
          <div class="bg-[#343a40] mr-12">
            <p class="bg-[#343a40] text-white">{t("about:limit")}</p>
            <button
              type="button"
              class="bg-[#f0f0f0] text-[#343a40] font-bold tracking-wider text-sm rounded-md py-2 px-4 hover:bg-[#adb5bd] hover:text-white sm:text-base mt-10"
              onClick={toggleNewText}
            >
              {showNewText ? t("about:hide") : t("about:findmore")}
            </button>
            {showNewText && (
              <div class="font-bold mt-10">
                <p class="bg-[#343a40] text-white text-center mb-8 mt-10">
                  {t("about:findtext")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto mt-[5rem] mb-32 bg-[#ffe8cc] p-10">
        <div class="flex-1 border-r-2 border-[#495057] flex items-center bg-[#ffe8cc]">
          <h2 class="text-3xl font-bold leading-9 text-center md:text-left bg-[#ffe8cc]">
            {t("about:learned")}
          </h2>
        </div>
        <div class="flex-1 flex flex-col justify-center items-center md:items-start bg-[#ffe8cc]">
          <ul class="list-disc pl-6 bg-[#ffe8cc]">
            <li class="mb-5 bg-[#ffe8cc]">{t("about:learnedp1")}</li>
            <li class="mb-5 bg-[#ffe8cc]">{t("about:learnedp2")}</li>
            <li class="bg-[#ffe8cc]">{t("about:learnedp3")}</li>
          </ul>
        </div>
      </div>

      <div class="flex items-center justify-center mb-32">
        <div class="relative w-[90%]">
          <img src={learned} alt="learned" class="w-full" />
          <div class="absolute top-0 left-0 text-xl w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-white text-xl bg-transparent w-[80%] flex flex-col items-center justify-center mt-10">
              <div class="text-white text-xl bg-transparent w-[80%] mb-20">
                <h2 class="text-white text-xl bg-transparent mb-5">
                  {t("about:endtext")}
                </h2>
                <ul class="text-white text-xl bg-transparent list-disc pl-6">
                  <li class="text-white text-xl bg-transparent mb-5">
                    {t("about:endtextp1")}
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    {t("about:endtextp2")}
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    {t("about:endtextp3")}
                  </li>
                  <li class="text-white text-xl bg-transparent mb-5">
                    {t("about:endtextp4")}
                  </li>
                </ul>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5">
                <p class="text-white text-xl bg-transparent mb-5">
                  {t("about:process")}
                </p>
                <ul class="list-disc pl-6 text-white text-xl bg-transparent">
                  <li class="mb-5 text-white text-xl bg-transparent">
                    {t("about:processp1")}
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    {t("about:processp2")}
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    {t("about:processp3")}
                  </li>
                  <li class="mb-5 text-white text-xl bg-transparent">
                    {t("about:processp4")}
                  </li>
                </ul>
                <p class="font-bold underline text-white text-xl bg-transparent">
                  {t("about:processp5")}
                </p>
              </div>
              <div class="text-white text-xl bg-transparent w-[80%] mb-5 mt-10">
                <p class="mb-5 text-white text-xl bg-transparent">
                  {t("about:endtext1")}
                </p>
                <p class="mb-5 text-white text-xl bg-transparent">
                  {t("about:exndtext2")}
                </p>
                <p class="mb-5 text-white text-xl bg-transparent">
                  {t("about:exndtext3")}
                </p>
              </div>
              <div class="text-center w-[50%] text-white text-2xl bg-transparent mt-20">
                <p class="font-bold text-white text-xl bg-transparent">
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
