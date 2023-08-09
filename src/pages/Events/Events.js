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
      <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 mt-[6rem] mb-[6rem] items-center justify-center">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7Nkhi3Y0mRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QbgTg4e-nzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yktl6S207io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QQDB5NEGA-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aaY7dbxVPLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/E0GiLdYhDuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0UOc1uKFkyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>  
      <Footer />
    </div>
  );
};

export default Events;
