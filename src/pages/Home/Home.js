import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Comparison from "../../components/Comparison/Comparison";
import Work from "../../components/Work/Work";
import Invite from "../../components/Invite/Invite";
import QuestionsSlider from "../../components/QuestionsSlider/QuestionsSlider";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

import { useTranslation } from "react-i18next";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Description />
      <Comparison />
      <Work />
      <Invite />
      <QuestionsSlider />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
