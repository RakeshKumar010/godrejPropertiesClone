import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeDetailsNav = () => {
  return (
    <div className=" flex justify-between  py-4 absolute top-14 md:top-20 z-50 left-0 right-0 border-t-2 mx-3 md:mx-10">
      <Link to={'../'} className="back-block flex items-center text-white font-semibold text-[12px] md:text-lg">
        <FaArrowLeftLong/>
        <span className="ml-2 md:block hidden">Back</span>
      </Link>
      <ul className="flex items-center text-white  gap-6 font-semibold text-[12px] md:text-lg">
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#neighbourhood">Location</a>
        </li>
        <li>
          <a href="#plans">Plans</a>
        </li>
        <li>
          <a href="#price">Price</a>
        </li>
        <li className="md:block hidden">
          <a href="#amenities">Amenities</a>
        </li>
      </ul>
    </div>
  );
};

export default HomeDetailsNav;
