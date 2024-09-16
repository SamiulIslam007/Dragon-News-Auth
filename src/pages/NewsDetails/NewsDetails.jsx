import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  const allNews = useLoaderData();

  const currentNews = allNews.find((singleNews) => singleNews._id === id);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid mt-8 grid-cols-4">
        <div className="col-span-3 p-5 pt-0">
          <div className="card bg-base-100 p-6  border border-[#E7E7E7] rounded shadow-xl">
            <figure>
              <img
                className="rounded w-full object-fill"
                src={currentNews.image_url}
                alt="News"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{currentNews.title}</h2>
              <p>{currentNews.details}</p>
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
