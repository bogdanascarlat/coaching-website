import React from "react";
import invite from "../../assets/invite.jpg";
import "../../styles/tailwind.css";

import { useTranslation } from "react-i18next";

const Invite = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div class="grid grid-cols-2 gap-4 w-[90%] ml-auto mr-auto mb-60 bg-[#343a40]">
      <div class="flex-1 bg-dark-grey bg-[#343a40]">
        <img
          src={invite}
          alt="one to one"
          class="p-16 bg-[#343a40] h-full shadow-md"
        />
      </div>

      <div class="flex-1 bg-[#343a40] flex flex-col justify-center items-start ml-auto mr-auto">
        <h2 className="logo bg-[#343a40] flex justify-between font-dancingScript text-white text-4xl mb-3 xs:text-center">
          Roxana Dumitrescu
        </h2>
        <div class="bg-[#343a40] mt-40 mr-12 text-2xl font-bold mb-60">
          <h3 class="text-4xl font-bold mb-2 bg-[#343a40] text-white text-center">
            {t("home:areyoureadyforthemostinterestingcoachingexperience")}
          </h3>
          <p class="bg-[#343a40] text-white text-center text-2xl mb-8 mt-20">
            {t("home:invitetext")}
          </p>
          <a
            href="https://bit.ly/3owcQLe"
            class="bg-[#f0f0f0] text-[#343a40] font-bold tracking-widest leading-tight text-base py-2 px-6 ml-auto mr-auto rounded-md cursor-pointer w-[43%] h-[20%] text-center hover:bg-[#868e96] hover:text-white flex justify-center items-center"
          >
            {t("home:schedulemeeting")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Invite;
