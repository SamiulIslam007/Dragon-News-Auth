import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav.jsx";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import News from "./News.jsx";

const Home = () => {
  return (
    <div>
      <Header />
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
            <News />
            <News />
            <News />
            <News />
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
