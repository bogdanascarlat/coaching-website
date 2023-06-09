import React from "react";
import invite from "../../assets/invite.jpg";

import { useTranslation } from "react-i18next";

const Invite = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="mt-[6rem] grid grid-cols-2 gap-4 bg-[#343a40]">
      <div className="bg-dark-grey flex-1 bg-[#343a40]">
        <img
          src={invite}
          alt="one to one"
          className="h-full bg-[#343a40] p-16 shadow-md"
        />
      </div>

      <div className="ml-auto mr-auto flex flex-1 flex-col items-start justify-center bg-[#343a40]">
        <h2 className="logo font-dancingScript xs:text-center mb-3 flex justify-between bg-[#343a40] text-4xl text-white">
          Roxana Dumitrescu
        </h2>
        <div className="mb-60 mr-12 mt-40 bg-[#343a40] text-2xl font-bold">
          <h3 className="mb-2 bg-[#343a40] text-center text-4xl font-bold text-white">
            {t("home:areyoureadyforthemostinterestingcoachingexperience")}
          </h3>
          <p className="mb-8 mt-20 bg-[#343a40] text-center text-2xl text-white">
            {t("home:invitetext")}
          </p>
          <a
            href="https://bit.ly/3owcQLe"
            className="ml-auto mr-auto flex h-[20%] w-[43%] cursor-pointer items-center justify-center rounded-md bg-[#f0f0f0] px-6 py-2 text-center text-base font-bold leading-tight tracking-widest text-[#343a40] hover:bg-[#868e96] hover:text-white"
          >
            {t("home:schedulemeeting")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Invite;
