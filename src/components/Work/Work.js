import React from "react";
import { useTranslation } from "react-i18next";



function Work() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="work-section py-20">
      <div className="mb-[3rem]">
        <h1 className="mb-3 text-center text-3xl font-bold">
          {t("home:howwillweworktogether")}
        </h1>
        <p className="mx-auto mt-5 w-full md:w-1/2 md:w-1/2 items-center text-center text-2xl font-semibold">
          {t("home:iwillhelpyouidentifythebestoptionaccordingtoyourneeds.")}
        </p>
      </div>
      <div class="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="border border-slate-400 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="text-center p-3">
              <h2 className="mb-3 font-bold">{t("home:calibration")}</h2>
              <p className="flex flex-col items-center justify-center">{t("home:calibrationtext")}</p>
            </div>
          </div>
          <div className="border border-slate-400 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="text-center p-3">
              <h2 className="mb-3 font-bold">{t("home:collaboration")}</h2>
              <p className="flex flex-col items-center justify-center">{t("home:collaborationtext")}</p>
            </div>
          </div>
          <div className="border border-slate-400 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="text-center p-3">
              <h2 className="mb-3 font-bold">{t("home:theactualthing")}</h2>
              <p className="flex flex-col items-center justify-center">{t("home:theactualthingtext")}</p>
            </div>
          </div>
          <div className="border border-slate-400 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="text-center p-3">
              <h2 className="mb-3 font-bold">{t("home:analyze")}</h2>
              <p className="flex flex-col items-center justify-center">{t("home:analyzetext")}</p>
            </div>
          </div>
          <div className="border border-slate-400 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="text-center p-3">
              <h2 className="mb-3 font-bold">{t("home:mentoring")}</h2>
              <p className="flex flex-col items-center justify-center">{t("home:mentoringtext")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
