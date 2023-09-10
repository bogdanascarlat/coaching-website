import React from "react";
import group from "../../../assets/group.jpg";

import { useTranslation } from "react-i18next";

const Group = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div className="mb-[5rem] ml-auto mr-auto grid w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
      <div className="bg-dark-grey flex-1 bg-[#343a40]">
        <img src={group} alt="group" className="h-full bg-[#343a40] p-8 md:p-14 xl:p-14" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center bg-[#ffe8cc] p-5 md:ml-auto md:mr-auto">
        {/* <h2 className="group-title mb-4 bg-[#ffe8cc] pt-4 text-2xl font-bold">
          {t("solutions:group")}
        </h2> */}
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:groupp1")}</p>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:groupp2")}</p>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:groupp3")}</p>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:groupp4")}</p>
      </div>
    </div>
  );
};

export default Group;
