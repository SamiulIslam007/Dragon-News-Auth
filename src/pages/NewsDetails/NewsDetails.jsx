import React from "react";
import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Header />
      <div className="grid mt-8 grid-cols-4">
        <div className="col-span-3 p-5 pt-0">
          <div className="card bg-base-100 p-6  border border-[#E7E7E7] rounded shadow-xl">
            <figure>
              <img
                className="rounded"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h2>
              <p>
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military aid for Kyiv as Ukraine marked its independence day six
                months after Russia invaded the country.'The United States of
                America is committed to supporting the people of Ukraine as they
                continue the fight to defend their sovereignty. As part of that
                commitment, I am proud to announce our biggest tranche of
                security assistance to date: approximately $2. Wednesday, August
                24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
                Military, News, Russia, Security, UK, Ukraine, United States,
                Worthy News (Worthy News) – U.S. President Joe Biden has
                announced nearly $3 billion in new U.S. military aid for Kyiv as
                Ukraine marked its independence day six months after Russia
                invaded the country.'The United States of America is committed
                to supporting the people of Ukraine as they continue the fight
                to defend their sovereignty. As part of that commitment, I am
                proud to announce our biggest tranche of security assistance to
                date: approximately $2.
              </p>
              <div className="card-actions justify-Start">
                <button className="btn bg-[#D72050] text-white rounded-none">
                  <FaArrowLeftLong /> All news in this category
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
