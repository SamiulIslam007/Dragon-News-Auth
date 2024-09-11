import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="pt-5 ">
      <div>
        <img src={logo} className="mx-auto" alt="Main logo of the website" />
      </div>
      <h1 className="text-center text-lg mt-5 mb-2 text-[#706F6F]">
        Journalism Without Fear or Favour
      </h1>
      <p className="text-xl text-center text-[#706F6F]">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
      <div className="mt-8 p-4 bg-[#F3F3F3] flex gap-5 items-center">
        <p className="bg-[#D72050] px-6 py-2 text-white">Latest</p>
        <Marquee speed={100}>
          <p className="text-lg font-semibold text-[#403F3F]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            impedit quod id vitae? Distinctio doloribus vel cumque tempore
            obcaecati. Non.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
