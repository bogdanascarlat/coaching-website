import React from "react";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

import { useTranslation } from "react-i18next";

const Comparison = () => {
  const { t } = useTranslation(["comparison"]);
  return (
    <div className="mt-[6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img
            src={before}
            alt="before"
            className="mb-[6rem] block w-full md:hidden"
          />
        </div>
        <div className="mx-auto flex w-4/5 flex-col justify-end">
          <h2 className="mb-4 text-center text-2xl font-bold">
            {t("home:beforecallingacoach")}
          </h2>
          <div className="h-40 overflow-y-auto text-left">
            <p className="text-lg italic">“{t("home:comparisonp1")}</p>
            <p className="text-lg italic">{t("home:comparisonp2")}”</p>
          </div>
        </div>
      </div>

      <div className="relative mt-[6rem] flex items-center justify-center bg-[#ffe8cc] px-[1rem] py-[12rem] text-center">
        <img
          src={before}
          alt="before"
          className="absolute left-[4rem] top-[80px] mb-4 hidden -translate-y-full md:block md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px]"
        />
        <div>
          <q className="mb-2 block text-3xl font-bold">
            {t("comparison:quote")}
          </q>
          <p className="text-lg font-bold">&#8211; Confucius &#8211;</p>
        </div>
        <img
          src={after}
          alt="after"
          className="absolute bottom-[80px] right-[4rem] mb-4 hidden translate-y-full md:block md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px]"
        />
      </div>

      <div className="mt-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src={after}
            alt="after"
            className="mb-[6rem] block w-full md:hidden"
          />
          <div className="mx-auto flex w-4/5 flex-col justify-end">
            <h2 className="mb-4 text-2xl font-bold">
              {t("home:afterworkingwithacoach")}
            </h2>
            <div className="h-40 overflow-y-auto text-left">
              <p className="mb-4 text-lg italic">“{t("home:comparisonp3")}</p>
              <p className="text-lg italic">{t("home:comparisonp4")}”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
