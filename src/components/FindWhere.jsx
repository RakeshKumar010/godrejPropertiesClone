import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import ExpHome from "./ExpHome";
const FindWhere = () => {
  return (
    <div className="m-5 md:m-16">
      <div className="mb-10">
        <div className="flex gap-4 justify-center">
          <p className="text-lg font-semibold mb-5 text-nowrap">FIND WHERE YOU BELONG</p>
        </div>
        <div className="flex gap-12 justify-center ">
          <div className="flex items-center gap-1 text-gray-700">
            <TfiMenuAlt className="text-2xl" />
            <p className="underline text-nowrap">List View</p>
          </div>
          <div className="flex items-center gap-1  text-gray-400">
            <SlLocationPin />
            <p className="text-nowrap">Map View</p>
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex gap-8 p-2 md:p-4 mb-5"
          style={{ boxShadow: "0 0 8px gray" }}
        >
          <IoIosSearch className=" text-3xl " />
          <input type="text" placeholder="Enter Project Name" />
        </div>
        <div className=" md:flex hidden gap-8 p-3 border-2 border-blue-500 justify-between">
          <div className="py-3 px-10 border-2"></div>
          <button className="bg-black text-white py-3 px-10">RESET</button>
        </div>

        <div className="md:flex hidden items-center w-full my-8 ">
          <span className="mr-5">New Launches Only</span>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" className="sr-only peer" />
            <div className="block relative bg-gray-300 w-16 h-9 p-1 rounded-full before:absolute before:bg-white before:w-7
             before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 
             peer-checked:before:left-8 peer-checked:before:bg-blue-500"></div>
          </label>
        </div>
        <ExpHome/>
      </div>
    </div>
  );
};

export default FindWhere;
