import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import empty_state from "../../assets/4282101.jpg";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div class="flex flex-col items-center justify-center h-screen">
        <p class="text-gray-500 text-lg mb-5 xs:col-12 max-w-xs mx-auto text-center">
          Revenim cu cele mai actuale activitati cat mai curand posibil.
        </p>
        <img src={empty_state} alt="no content" class="w-1/3 h-50" />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
