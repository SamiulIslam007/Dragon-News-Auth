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
    </div>
  );
};

export default Header;
