import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZoneImg1 from "../../assets/qZone1.png";
import qZoneImg2 from "../../assets/qZone2.png";
import qZoneImg3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* login in with */}
      <div className="mb-12">
        <h2 className="font-bold text-2xl mb-7">Login With</h2>
        <button className="w-full btn btn-outline btn-primary border rounded-lg mb-4 flex items-center">
          <FaGoogle /> Login With Google
        </button>
        <button className="w-full btn btn-outline btn-primary border rounded-lg flex items-center">
          <FaGithub /> Login With github
        </button>
      </div>
      {/* find us on */}
      <div>
        <h2 className="font-bold text-2xl mb-7">Find Us On</h2>
        <div className="join join-vertical justify-start w-full">
          <button className="btn join-item font-medium justify-start bg-transparent w-full">
            <FaFacebook /> Facebook
          </button>
          <button className="btn join-item font-medium justify-start bg-transparent w-full">
            <FaTwitter /> Twitter
          </button>
          <button className="btn join-item font-medium justify-start bg-transparent w-full">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
      {/* Q-Zone */}
      <div className="bg-[#F3F3F3] mt-8 p-5 rounded-md">
        <h2 className="font-bold text-center md:text-start text-2xl mb-5">
          Q-Zone
        </h2>
        <div>
          <img
            className="mx-auto md:mx-0"
            src={qZoneImg1}
            alt="Q-zone images"
          />
        </div>
        <div>
          <img
            className="mx-auto md:mx-0"
            src={qZoneImg2}
            alt="Q-zone images"
          />
        </div>
        <div>
          <img
            className="mx-auto md:mx-0"
            src={qZoneImg3}
            alt="Q-zone images"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
