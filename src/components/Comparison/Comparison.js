import React from "react";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";

import { useTranslation } from "react-i18next";

const Comparison = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div class="w-full h-96 relative mx-auto mb-80 pt-8 md:mb-[80] sm:mb-[80]">
      <div class="flex absolute left-10 -top-[75%] bg-transparent md:col-12 ">
        <div class="w-full lg:w-1/2 justify-center items-center mr-20 bg-transparent grid grid-cols-2 sm:grid-cols-1">
          <img src={before} alt="before" class="h-auto max-w-full z-10" />
        </div>
        <div class="w-full lg:w-1/2 mr-20 mt-10">
          <h2 class="text-2xl font-bold mb-4">
            {t("home:beforecallingacoach")}
          </h2>
          <div class="max-w-2xl mx-auto text-left h-40 overflow-y-scroll">
            <p class="text-lg font-semibold mb-4">{t("home:comparisonp1")}</p>
            <p class="text-lg font-semibold">{t("home:comparisonp2")}</p>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center text-center bg-[#ffe8cc]">
        <div class="bg-[#ffe8cc]">
          <q class="text-3xl font-bold block mb-2 bg-[#ffe8cc]">
            Balance is the perfect state of still water. Let that be our model.
          </q>
          <p class="text-lg font-bold bg-[#ffe8cc]">
            &#8211; Confucius &#8211;
          </p>
        </div>
      </div>

      <div class="absolute right-20 -bottom-[75%] bg-transparent">
        <div class="flex items-center bg-transparent">
          <div class="max-w-2xl mx-auto text-left h-40 overflow-y-scroll">
            <h2 class="text-2xl font-bold mb-4">
              {t("home:afterworkingwithacoach")}
            </h2>
            <p class="text-lg font-semibold mb-4">{t("home:comparisonp3")}</p>
            <p class="text-lg font-semibold">{t("home:comparisonp4")}</p>
          </div>
          <div class="w-full lg:w-1/2 flex justify-center items-center ml-20 bg-transparent">
            <img src={after} alt="after" class="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
