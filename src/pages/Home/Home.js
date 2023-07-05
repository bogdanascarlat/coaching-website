import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Comparison from "../../components/Comparison/Comparison";
import Work from "../../components/Work/Work";
import Invite from "../../components/Invite/Invite";
import QuestionsSlider from "../../components/QuestionsSlider/QuestionsSlider";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mb-[6rem]">
        <Header />
        <Description />
        <Comparison />
        <Work />
        <Invite />
        <QuestionsSlider />
      </main>
      <Footer />
    </>
  );
};

export default Home;
