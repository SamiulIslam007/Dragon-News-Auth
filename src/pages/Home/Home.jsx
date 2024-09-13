import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav.jsx";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import News from "./News.jsx";
import { useLoaderData } from "react-router-dom";
import Headline from "../../shared/Headline/Headline.jsx";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header />
      <Headline />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-16">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2   md:px-5">
          <h2 className="text-xl text-[#403F3F] font-semibold mb-8">
            Dragon News Home
          </h2>
          <div className="space-y-7">
            {news.map((singleNews) => {
              return <News key={singleNews._id} singleNews={singleNews} />;
            })}
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
