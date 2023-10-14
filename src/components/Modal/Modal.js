import React from 'react';
import { useTranslation } from "react-i18next";

const Modal = ({ closeForm }) => {
    const { t } = useTranslation(["home"]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-4">
        <button className="absolute top-2 right-2 text-red-500" onClick={closeForm}>
          X
        </button>
        <h1 className="text-3xl font-bold mb-3 text-center text-black">
            {t("home:sendamessage")}
        </h1>
        <form
            // ref={form}
            // onSubmit={handleSubmit}
            method="POST"
            className="text-center p-4 border-4 border-[#495057] rounded-3xl mt-10"
        >
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <input
                    type="text"
                    name="name"
                    placeholder={t("home:name")}
                    className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full md:w-1/2 my-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full md:w-1/2 my-4"
                />
            </div>
            <textarea
                name="message"
                placeholder={t("home:message")}
                className="p-4 text-lg font-normal leading-6 tracking-wide text-gray-700 placeholder-gray-400 border-2 border-gray-400 rounded-lg resize-none w-full h-40 md:h-60 lg:h-72"
            ></textarea>
            <div className="flex justify-center items-center mt-3">
                <button
                    type="submit"
                    className="bg-[#343a40] text-white font-bold tracking-wide uppercase py-2 px-4 md:px-6 rounded-2xl cursor-pointer hover:bg-[#495057] hover:text-[#f0f0f0] text-base md:text-lg"
                      >
                    {t("home:sendyourmessage")}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
