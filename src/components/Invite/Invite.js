import React from "react";
import invite from "../../assets/invite2.jpg";

import { useTranslation } from "react-i18next";

const Invite = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="mt-[6rem] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-[#343a40]">
      <div className="bg-dark-grey flex-1 bg-[#343a40] px-10 pt-10 md:py-10 xl:py-10">
        <img
          src={invite}
          alt="one to one"
          className="object-contain mx-auto h-full bg-[#343a40]"
        />
      </div>
      <div className="ml-auto mr-auto flex flex-1 flex-col justify-center bg-[#343a40] pb-16 md:pb-0 xl:pb:0">
        <div className="flex justify-center items-center">
          <h2 className="logo font-dancingScript mb-5 md:mb-10 xl:mb-10 bg-[#343a40] text-2xl md:text-4xl xl:text-4xl text-white hover:text-slate-300">
            Roxana Dumitrescu
          </h2>
        </div>
        <div className="bg-[#343a40] text-2xl font-bold mx-10">
          <h3 className="mb-2 bg-[#343a40] text-center text-3xl md:text-4xl xl:text-4xl font-bold text-white">
            {t("home:areyoureadyforthemostinterestingcoachingexperience")}
          </h3>
          <p className="mb-8 mt-20 bg-[#343a40] text-center text-2xl text-white">
            {t("home:invitetext")}
          </p>
          <a
            href="https://calendly.com/roxana-dumitrescu-coach-sesiune-consultanta-/30min"
            className="ml-auto mr-auto flex h-[13%] md:h-[20%] xl:h-[20%] w-[70%] md:w-[43%] xl:w-[43%] cursor-pointer items-center justify-center rounded-md bg-[#f0f0f0] px-6 py-2 text-center text-base font-bold leading-tight tracking-widest text-[#343a40] hover:bg-[#868e96] hover:text-white"
          >
            {t("home:schedulemeeting")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Invite;
