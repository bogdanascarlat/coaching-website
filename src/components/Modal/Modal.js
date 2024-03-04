import React, {useState, useRef} from 'react';
import { useTranslation } from "react-i18next";

const Modal = ({ closeForm }) => {
  const { t } = useTranslation(["home"]);
  
  const form = useRef();
  const messageElement = useRef();

  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(form.current);
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const phone = formData.get("phone");
      
      console.log(formData)

      const response = await fetch("https://api.roxanadumitrescu.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Display a success message to the user
      setMessage({ text: "Form submitted successfully!", type: "success" });
    } catch (error) {
      console.error("Error during form submission:", error);
      
      // Display an error message to the user
      setMessage({ text: "Error during form submission. Please try again.", type: "error" });
    }
  };
    
  return (
    <div className="fixed overflow-auto inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50 md:mt-[4.5rem] mt-[3rem]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
        {message && (
          <div className="flex justify-end">
            <button
              onClick={() => closeForm()}
              className="rounded-full bg-red-500 text-white px-2"
            >
              X
            </button>
          </div>
        )}
        {message ? (
          <div ref={messageElement} className={`rounded p-4 text-white shadow-xl font-bold ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </div>
        ) : (
        <div>
          <button className="absolute top-[-1.5rem] text-5xl right-2 text-red-600" onClick={closeForm}>
            X
          </button>
          <h1 className="text-3xl font-bold mb-3 text-center text-black">
            {t("home:register")}
          </h1>
          <form
              ref={form}
              onSubmit={handleSubmit}
              method="POST"
              action="/send-email"
              className="text-center p-4 border-4 border-[#495057] rounded-3xl mt-10"
          >
                <div className="flex flex-wrap mx-2 w-[19rem] md:w-[40rem]">
                    <div className="w-1/2 md:w-1/2 px-2">
                        <input
                            type="text"
                            name="firstName"
                            placeholder={t("home:firstName")}
                            className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/2 px-2">
                        <input
                            type="text"
                            name="lastName"
                            placeholder={t("home:lastName")}
                            className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/2 px-2">
                        <input
                            type="text"
                            name="email"
                            placeholder={t("home:email")}
                            className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full my-4 text-lg md:text-xl"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/2 px-2">
                        <input
                            type="text"
                            name="phone"
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
      )}
      </div>
    </div>
  );
};

export default Modal;
