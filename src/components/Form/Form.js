// import React, { useRef } from "react";

// import { useTranslation } from "react-i18next";

// const Form = () => {
//   const form = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     fetch("http://localhost:8080/send-email", {
//       method: "POST",
//       body: JSON.stringify({ name, email, message }),
//     });
//   };

//   const { t } = useTranslation(["home"]);

//   return (
//     <div className="mx-auto pb-20 px-5 md:px-10 lg:px-0 max-w-screen-lg">
//       <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
//         <h1 className="text-3xl font-bold mb-3 text-center">
//           {t("home:sendamessage")}
//         </h1>
//         <form
//           ref={form}
//           onSubmit={handleSubmit}
//           method="POST"
//           className="text-center p-4 border-4 border-[#495057] rounded-3xl mt-10"
//         >
//           <div className="flex flex-col md:flex-row justify-between gap-5">
//             <input
//               type="text"
//               name="name"
//               placeholder={t("home:name")}
//               className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full md:w-1/2 my-4"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="email"
//               className="p-6 text-[#495057] border-solid border-2 border-gray-400 rounded-md w-full md:w-1/2 my-4"
//             />
//           </div>
//           <textarea
//             name="message"
//             placeholder={t("home:message")}
//             className="p-4 text-lg font-normal leading-6 tracking-wide text-gray-700 placeholder-gray-400 border border-2 border-gray-400 rounded-lg resize-none w-full h-40 md:h-60 lg:h-72"
//           ></textarea>
//           <div className="flex justify-center items-center mt-3">
//             <button
//               type="submit"
//               className="bg-[#343a40] text-white font-bold tracking-wide uppercase py-2 px-4 md:px-6 rounded-2xl cursor-pointer hover:bg-[#495057] hover:text-[#f0f0f0] text-base md:text-lg"
//             >
//               {t("home:sendyourmessage")}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
