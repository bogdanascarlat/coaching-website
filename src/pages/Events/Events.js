import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import empty_state from "../../assets/4282101.jpg";

import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation(["events"]);
  return (
    <div>
      <Navbar />
      <div class="flex flex-col items-center justify-center h-screen">
        <p class="text-gray-500 text-lg mb-5 xs:col-12 max-w-xs mx-auto text-center">
          {t(
            "events:wewillreturnwiththemostcurrentactivitiesassoonaspossible."
          )}
        </p>
        <img src={empty_state} alt="no content" class="w-1/3 h-50" />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
