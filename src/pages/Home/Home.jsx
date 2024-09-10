import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import moment from "moment";

const Home = () => {
  const [date, setDate] = useState(moment().format("dddd, MMMM D, YYYY"));
  setInterval(() => {
    setDate(moment().format("dddd, MMMM D, YYYY, hh:mm:ss A"));
  }, 1000);
  return (
    <div>
      <Header />
      <Navbar />
      <h2 className="text-3xl">This is home.....</h2>
      {/* Moment js implementation */}

      <p className="text-2xl">{date}</p>
    </div>
  );
};

export default Home;
