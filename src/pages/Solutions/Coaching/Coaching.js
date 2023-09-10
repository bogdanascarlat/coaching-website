import React from "react";
import coaching from "../../../assets/meeting.jpg";

import { useTranslation } from "react-i18next";

const Coaching = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div className="mb-[5rem] md:mb-[5rem] xl:mb-[5rem] ml-auto mr-auto w-[90%] bg-[#343a40] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      <div className="bg-dark-grey flex-1 bg-[#343a40]">
        <img src={coaching} alt="coaching" className="bg-[#343a40] p-8 md:p-14 xl:p-14" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center overflow-y-scroll md:h-[500px] bg-[#ffe8cc] p-5">
        {/* <h2 className="mb-5 mt-[50rem] bg-[#ffe8cc] md:mt-4 xl:mt-4 text-2xl font-bold p-5">
          Executive Coaching
        </h2> */}
        <p className="mb-2 mt-0 md:mt-[10rem] xl:mt-[10rem] bg-[#ffe8cc]">{t("solutions:coachingp1")}</p>
        <p className="mb-2 bg-[#ffe8cc] font-bold">
          {t("solutions:coachingp2")}
        </p>
        <dl className="bg-[#ffe8cc]">
          <dt className="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp3")}
          </dt>
          <dd className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp4")}</dd>

          <dt className="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp5")}
          </dt>
          <dd className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp6")}</dd>

          <dt className="bg-[#ffe8cc] font-semibold">Work-life balance </dt>
          <dd className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp7")}</dd>

          <dt className="bg-[#ffe8cc] font-semibold">
            {t("solutions:coaching8")}
          </dt>
          <dd className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp9")}</dd>

          <dt className="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp10")}
          </dt>
          <dd className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp11")}</dd>
        </dl>
        <p className="mb-2 bg-[#ffe8cc] font-bold">
          {t("solutions:coachingp12")}
        </p>
      </div>
    </div>
  );
};

export default Coaching;
