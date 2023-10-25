import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Podcast = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="mx-4 grid grid-cols-1 gap-36 md:grid-cols-2 mt-[6rem] mb-[6rem] items-center justify-center">
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/7Nkhi3Y0mRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/QbgTg4e-nzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/yktl6S207io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/QQDB5NEGA-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/aaY7dbxVPLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/E0GiLdYhDuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="mx-auto">
            <iframe className="w-[56] md:w-[30rem] h-56 md:h-64 lg:h-72 xl:h-80" src="https://www.youtube-nocookie.com/embed/0UOc1uKFkyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>  
      <Footer />
    </div>
  );
};

export default Podcast;
