import React from "react";
import coaching from "../../../assets/meeting.jpg";

import { useTranslation } from "react-i18next";

const Coaching = () => {
  const { t } = useTranslation(["solutions"]);

  return (
    <div className="coaching-section grid grid-cols-1 md:grid-cols-2 w-[90%] h-80 ml-auto mr-auto mb-[15rem] xs:mb-[35rem] bg-[#343a40]">
      <div class="flex-1 bg-dark-grey bg-[#343a40] h-full">
        <img src={coaching} alt="coaching" class="p-16 bg-[#343a40]" />
      </div>

      <div class="p-5 bg-[#ffe8cc] flex flex-col justify-center items-start ml-auto mr-auto h-full overflow-y-scroll">
        <h2 className="coaching-title text-2xl font-bold mt-80 mb-5 pt-4 bg-[#ffe8cc]">
          Executive Coaching
        </h2>
        <p class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp1")}</p>
        <p class="bg-[#ffe8cc] mb-2 font-bold">{t("solutions:coachingp2")}</p>
        <dl class="bg-[#ffe8cc]">
          <dt class="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp3")}
          </dt>
          <dd class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp4")}</dd>

          <dt class="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp5")}
          </dt>
          <dd class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp6")}</dd>

          <dt class="bg-[#ffe8cc] font-semibold">Work-life balance </dt>
          <dd class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp7")}</dd>

          <dt class="bg-[#ffe8cc] font-semibold">{t("solutions:coaching8")}</dt>
          <dd class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp9")}</dd>

          <dt class="bg-[#ffe8cc] font-semibold">
            {t("solutions:coachingp10")}
          </dt>
          <dd class="bg-[#ffe8cc] mb-2">{t("solutions:coachingp11")}</dd>
        </dl>
        <p class="bg-[#ffe8cc] mb-2 font-bold">{t("solutions:coachingp12")}</p>
      </div>
    </div>
  );
};

export default Coaching;
