import React from "react";
import postCreatorImg from "../../assets/postcreator.png";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const News = () => {
  return (
    <div className="card bg-base-100 shadow-xl border border-[#E7E7E7] rounded-lg">
      <div className="flex bg-[#F3F3F3] py-5 rounded-t justify-between items-center">
        <div className="flex items-center gap-4 pl-5">
          <div className="w-10">
            <img
              className="w-full object-cover"
              src={postCreatorImg}
              alt="post creator"
            />
          </div>
          <div>
            <h3>Awlad Hossain</h3>
            <p>2022-08-21</p>
          </div>
        </div>
        <div className="flex text-2xl pr-5 space-x-4">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-[#403F3F]">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </h2>
      </div>
      <figure className="px-5 rounded-lg">
        <img
          className="rounded-lg"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="News Image"
        />
      </figure>
      <div className="card-body">
        <div className="border-b pb-5">
          <p className="font-normal text-[#706F6F] leading-6">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military a...{" "}
            <strong className="text-orange-500 font-semibold cursor-pointer">
              Read More
            </strong>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <span>4.9</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye />
            <span>5000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
