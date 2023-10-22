import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

import programsHeader from "../../assets/programs-header.jpg"
import programsPhoto1 from "../../assets/programs-picture1.jpg";
import programRelease from "../../assets/program-release.jpg";
import programInfo from "../../assets/programs-info.jpg";

import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation(["programs"]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  
  const replaceMonthWordWithStyle = (text) => {
    return text
      .replace(/Octombrie/g, '<span style="font-weight: bold"> Octombrie</span>')
      .replace(/October/g, '<span style="font-weight: bold"> October</span>');
  };
  
  const replaceGiftWordWithStyle = (text) => {
    return text
      .replace(/CADOU/g, '<span style="color: #FF0000; font-size: 20px; font-weight: bold"> CADOU </span>')
      .replace(/GIFT/g, '<span style="color: #FF0000; font-size: 20px; font-weight: bold"> GIFT </span>');
  };
  
  const translatedMonth = t('programs:program4');
  const translatedGift = t('programs:program6');

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-0">
          <img
            src={programsHeader}
            alt="Background Img"
            className="w-full h-[35rem] object-cover object-center z-0"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-bold z-10">
          <div className="text-center">
            <h1 className="w-[30rem] md:w-[50rem] sm:w-[50rem] sliding-paragraph text-xl md:text-4xl sm:text-4xl font-bold leading-9 text-center my-10 md:my-0 xl:my-0">{t("programs:header")}</h1>
          </div>
          <button
            type="button"
            className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase"
            onClick={toggleForm}
          >
            {t("programs:registerButton")}
          </button>
          {showForm && <Modal closeForm={toggleForm} />}
        </div>
      </div>
      
      <div className="mb-[6rem] ml-auto mr-auto mt-[6rem] grid w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src={programsPhoto1}
          alt="presentation"
          className="mr-[5rem] w-full md:w-[35rem]"
        />
        <div className="my-auto items-center justify-center">
          <p className="text-lg leading-relaxed sm:text-lg font-bold">
            {t("programs:about1.1")}
          </p>
          <p className="mb-5 text-lg leading-relaxed sm:text-lg font-bold">
            {t("programs:about1.2")}
          </p>
          <p className="text-lg leading-relaxed sm:text-lg">
            {t("programs:about2")}
          </p>
          <p className="mb-5 text-lg leading-relaxed sm:text-lg">
            {t("programs:about3")}
          </p>
          <p className="text-lg leading-relaxed sm:text-lg">
            {t("programs:about4")}
          </p>
          <p className="mb-5 text-lg leading-relaxed sm:text-lg">
            {t("programs:about5")}
          </p>
          <p className="text-lg leading-relaxed sm:text-lg">
            {t("programs:about6")}
          </p>
        </div>
      </div> 
      
      <div className="mb-[6rem] flex items-center justify-center">
        <div className="relative w-[90%]">
          <img src={programRelease} alt="writing" className="w-full" />
          <div className="md:absolute left-0 top-0 h-full w-full flex items-center justify-center bg-white md:bg-black md:bg-opacity-70 text-xl">
            <div className="w-[80%] md:text-justify bg-transparent text-xl text-black md:text-white my-10 md:my-0 xl:my-0">
              <div className="mb-20">
                <p dangerouslySetInnerHTML={{ __html: t('program1') }} className="text-lg mb-5 leading-relaxed text-center sm:text-xl"/>
                <p className="text-lg sm:text-xl leading-relaxed text-center">
                  {t("programs:program2")}
                </p>
              </div>
              <div className="mb-5">
                <p className="mb-5 text-lg leading-relaxed text-center sm:text-xl">
                  {t("programs:program3")}
                </p>
                <p dangerouslySetInnerHTML={{ __html: replaceMonthWordWithStyle(translatedMonth) }} className="text-lg leading-relaxed text-center sm:text-xl"/>
                <p className="text-lg leading-relaxed text-center sm:text-xl">
                  {t("programs:program5")}
                </p>
                <p dangerouslySetInnerHTML={{ __html: replaceGiftWordWithStyle(translatedGift)}} className="mb-5 text-lg leading-relaxed text-center sm:text-xl"/>
              </div>
              <div className="mt-10 mb-10 w-[60%] sm:w-[50%] md:w-[50%] xl:w-[50%] mx-auto bg-transparent text-center text-2xl text-white">
                <button
                  type="button"
                  className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase"
                  onClick={toggleForm}
                >
                  {t("programs:registerButton")}
                </button>
                  {showForm && <Modal closeForm={toggleForm} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-[6rem] ml-auto mr-auto mt-[6rem] grid w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src={programInfo}
          alt="presentation"
          className="w-full md:w-[35rem]"
        />
        <div className="items-center justify-center text-center pl-14 pr-14 py-5 border-2 shadow-2xl">
          <p className="mb-5 text-lg leading-relaxed sm:text-lg">
            {t("programs:info1")}
          </p>
          <p className="mb-5 text-lg leading-relaxed sm:text-lg">
            {t("programs:info2")}
          </p>
          <p className="mb-5 text-lg leading-relaxed sm:text-lg">
            {t("programs:info3")}
          </p>
          <div className="w-[60%] md:w-[50%] xl:w-[50%] text-center md:flex md: mx-auto">
            <button
              type="button"
              className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase"
              onClick={toggleForm}
            >
              {t("programs:registerButton")}
            </button>
            {showForm && <Modal closeForm={toggleForm} />}
          </div>
        </div>
      </div>
      
      <div className="mb-[6rem] flex items-center justify-center">
        <div className="w-[90%] border-2 shadow-2xl py-16 px-10">
              <div className="text-xl">
                <div className="mb-20 w-[100%] text-xl text-center">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="w-[20rem] md:w-[70rem] sm:w-[70rem] sliding-paragraph text-2xl md:text-4xl sm:text-4xl font-bold leading-9 text-center md:my-0 xl:my-0">
                      {t("programs:manifestTitle")}
                    </h2>
                  </div>
              </div>
              <div className="mb-5 w-[80%] text-xl">
                <p className="mb-10 text-lg leading-relaxed sm:text-lg">{t("programs:manifest1")}</p>
                <h2 className="mb-5 text-2xl leading-relaxed font-bold">{t("programs:programName")}</h2>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg">{t("manifest2")}</p>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg">{t("manifest3")}</p>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg">{t("manifest4")}</p>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg">{t("manifest5")}</p>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg">{t("manifest6")}</p>
                <p className="mb-10 text-lg leading-relaxed sm:text-lg">{t("manifest7")}</p>
                  <button
                    type="button"
                    className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase mb-24"
                    onClick={toggleForm}
                  >
                    {t("programs:registerButton")}
                  </button>
                  {showForm && <Modal closeForm={toggleForm} />}
                <h3 className="mb-5 text-lg leading-relaxed sm:text-xl font-bold">{t("manifest8")}</h3>
                <ul className="mb-10 list-disc bg-transparent pl-6 text-xl">
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest9")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest10")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest11")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest12")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest13")}
                  </li>
                  <li className="mb-5 bg-transparent text-xl">
                    {t("manifest14")}
                  </li>
                </ul>
                <p className="mb-5 text-lg leading-relaxed sm:text-lg font-bold">{t("manifest15")}</p>
                <p className="mb-10 text-lg leading-relaxed sm:text-lg">{t("manifest16")}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase"
                  onClick={toggleForm}
                >
                  {t("programs:registerButton")}
                </button>
                {showForm && <Modal closeForm={toggleForm} />}
              </div>
          </div>
        </div>
      </div>
      <div className="mb-[6rem] flex items-center justify-center">
        <div className="w-[90%] border-2 shadow-2xl py-16 px-10">
          <div className="text-xl text-center">
              <div className="mb-10">
                <p className="mb-5">
                  {t("programs:manifest17")}
                </p>
                <p>
                  {t("programs:manifest18")}
                </p>
              </div>
              <div className="mb-5">
                <p className="mb-5">
                  {t("programs:manifest19")}
                </p>
                <p>
                  {t("programs:manifest20")}
                </p>
                <p className="font-bold">
                {t("programs:manifest21")}
                </p>
              </div>
              <div className="mt-10 mb-10 w-[60%] sm:w-[50%] md:w-[50%] xl:w-[50%] mx-auto bg-transparent text-center text-2xl text-white">
                <button
                  type="button"
                  className="rounded-md bg-[#8B0000] px-4 py-2 text-lg font-bold tracking-wider text-white hover:bg-[#4A0404] sm:text-xl mt-10 w-64 h-12 sm:w-96 sm:h-16 uppercase"
                  onClick={toggleForm}
                >
                  {t("programs:registerButton")}
                </button>
                {showForm && <Modal closeForm={toggleForm} />}
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
