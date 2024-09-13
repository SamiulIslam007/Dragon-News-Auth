import React from "react";
import postCreatorImg from "../../assets/postcreator.png";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = ({ singleNews }) => {
  const {
    _id,
    title,
    thumbnail_url,
    image_url,
    details,
    author,
    total_view,
    rating,
  } = singleNews;
  return (
    <div className="card bg-base-100 shadow-xl border border-[#E7E7E7] rounded-lg">
      <div className="flex bg-[#F3F3F3] py-5 rounded-t justify-between items-center">
        <div className="flex items-center gap-4 pl-5">
          <div className="w-10">
            <img
              className="w-full object-cover"
              src={thumbnail_url}
              alt="post creator"
            />
          </div>
          <div>
            <h3>{author.name ? author.name : "Unknown"}</h3>
            <p>
              {" "}
              {author.published_date
                ? author.published_date
                : "Date not found"}{" "}
            </p>
          </div>
        </div>
        <div className="flex text-2xl pr-5 space-x-4">
          <CiBookmark className="cursor-pointer" />
          <CiShare2 className="cursor-pointer" />
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-[#403F3F]">{title}</h2>
      </div>
      <figure className="px-5 rounded-lg">
        <img
          className="rounded-lg object-fit w-fit"
          src={image_url}
          alt="News Image"
        />
      </figure>
      <div className="card-body">
        <div className="border-b pb-5">
          <p className="font-normal text-[#706F6F] leading-6">
            {/* Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military a...{" "}
            <strong className="text-orange-500 font-semibold cursor-pointer">
              Read More
            </strong> */}
            {details.length > 200 ? (
              <div>
                {details.slice(0, 200)} ...
                <Link
                  to={`/news/${_id}`}
                  className="text-orange-500 font-semibold cursor-pointer"
                >
                  Read More
                </Link>
              </div>
            ) : (
              details
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <span> {rating.number}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
