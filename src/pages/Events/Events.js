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
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="xs:col-12 mx-auto mb-5 max-w-xs text-center text-lg text-gray-500">
          {t(
            "events:wewillreturnwiththemostcurrentactivitiesassoonaspossible."
          )}
        </p>
        <img src={empty_state} alt="no content" className="h-50 w-1/3" />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
