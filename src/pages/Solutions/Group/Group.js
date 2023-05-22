import React from "react";
import group from "../../../assets/group.jpg";

import { useTranslation } from "react-i18next";

const Group = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 w-[90%] ml-auto mr-auto mb-[5rem] bg-[#343a40]">
      <div class="flex-1 bg-dark-grey bg-[#343a40]">
        <img src={group} alt="group" class="p-16 bg-[#343a40] h-full" />
      </div>
      <div class="flex-1 p-5 bg-[#ffe8cc] flex flex-col justify-center items-start md:ml-auto md:mr-auto">
        <h2 class="group-title text-2xl font-bold mb-4 pt-4 bg-[#ffe8cc]">
          {t("solutions:group")}
        </h2>
        <p class="bg-[#ffe8cc] mb-2">{t("solutions:groupp1")}</p>
        <p class="bg-[#ffe8cc] mb-2">{t("solutions:groupp2")}</p>
        <p class="bg-[#ffe8cc] mb-2">{t("solutions:groupp3")}</p>
        <p class="bg-[#ffe8cc] mb-2">{t("solutions:groupp4")}</p>
      </div>
    </div>
  );
};

export default Group;
