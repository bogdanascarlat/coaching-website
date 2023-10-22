import React from 'react';
import { useTranslation } from "react-i18next";

const Modal = ({ closeForm }) => {
    const { t } = useTranslation(["home"]);
  return (
    <div className="fixed overflow-auto inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 z-50 md:mt-[4.5rem] mt-[3rem]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
        <button className="absolute top-2 text-5xl right-2 text-red-600" onClick={closeForm}>
          X
        </button>
        <h1 className="text-3xl font-bold mb-3 text-center text-black">
          {t("home:register")}
        </h1>
        <form
            // ref={form}
            // onSubmit={handleSubmit}
            method="POST"
            className="text-center p-4 border-4 border-[#495057] rounded-3xl mt-10"
        >
              <div className="flex flex-wrap mx-2 w-[25rem] md:w-[40rem]">
                  <div className="w-1/2 md:w-1/2 px-2">
                      <input
                          type="text"
                          name="name"
                          placeholder={t("home:firstName")}
                          className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                      />
                  </div>
                  <div className="w-1/2 md:w-1/2 px-2">
                      <input
                          type="email"
                          name="email"
                          placeholder={t("home:lastName")}
                          className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                      />
                  </div>
                  <div className="w-1/2 md:w-1/2 px-2">
                      <input
                          type="text"
                          name="name"
                          placeholder={t("home:email")}
                          className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                      />
                  </div>
                  <div className="w-1/2 md:w-1/2 px-2">
                      <input
                          type="email"
                          name="email"
                          placeholder={t("home:phoneNumber")}
                          className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                      />
                  </div>
              </div>
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
