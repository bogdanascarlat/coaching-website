import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageDropdown = () => {
  const [language, setLanguage] = React.useState("ro"); // default language is Ro
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false); // initial state of language options dropdown is closed

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState); // toggle the state of language options dropdown on button click
  };

  const handleLanguageSelect = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    setIsDropdownOpen(false); // this line will close the dropdown
  };

  return (
    <div className="relative">
      <button
        className={`flex items-center text-xl mr-4 ${
          i18n.language === "en" && "hover:bg-[#f0f0f0]"
        }`}
        type="button"
        value={localStorage.getItem("i18nextLng")}
        onClick={handleDropdownToggle}
      >
        {/* {t("buttonText")} */}
        {language === "en" ? "English" : "Română"}
        <svg
          className="ml-2 h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-8-8H1v14h18V4h-1.5L10 12z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f0f0] hover:text-[#343a40] w-full text-left"
              role="menuitem"
              value="en"
              onClick={handleLanguageSelect}
            >
              English
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f0f0] hover:text-[#343a40] w-full text-left"
              role="menuitem"
              value="ro"
              onClick={handleLanguageSelect}
            >
              Română
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
