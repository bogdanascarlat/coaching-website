import React from "react";
import oneToOne from "../../../assets/one-to-one.jpg";

import { useTranslation } from "react-i18next";

const OneToOne = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div className="mb-[5rem] ml-auto mr-auto grid w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
      <div className="bg-dark-grey flex-1 bg-[#343a40]">
        <img
          src={oneToOne}
          alt="one to one"
          className="h-full bg-[#343a40] p-16"
        />
      </div>
      <div className="ml-auto mr-auto flex flex-1 flex-col items-start justify-center bg-[#ffe8cc] p-5">
        <h2 className="group-title mb-4 bg-[#ffe8cc] pt-4 text-2xl font-bold">
          One-to-One
        </h2>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:onetoonep1")}</p>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:onetoonep2")}</p>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:onetoonep3")}</p>
      </div>
    </div>
  );
};
export default OneToOne;
