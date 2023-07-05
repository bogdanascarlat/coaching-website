import React from "react";
import coaching from "../../../assets/meeting.jpg";

import { useTranslation } from "react-i18next";

const Coaching = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div className="coaching-section xs:mb-[35rem] mb-[15rem] ml-auto mr-auto grid h-80 w-[90%] grid-cols-1 bg-[#343a40] md:grid-cols-2">
      <div className="bg-dark-grey h-full flex-1 bg-[#343a40]">
        <img src={coaching} alt="coaching" className="bg-[#343a40] p-16" />
      </div>

      <div className="ml-auto mr-auto flex h-full flex-col items-start justify-center overflow-y-scroll bg-[#ffe8cc] p-5">
        <h2 className="coaching-title mb-5 mt-80 bg-[#ffe8cc] pt-4 text-2xl font-bold">
          Executive Coaching
        </h2>
        <p className="mb-2 bg-[#ffe8cc]">{t("solutions:coachingp1")}</p>
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
