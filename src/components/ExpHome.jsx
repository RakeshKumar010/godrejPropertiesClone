import React, { useState, useEffect } from "react";
import ExpHomeCards from "./ExpHomeCards";
import Homes from "../data/Homes";
import Pagination from "./Pagination";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const ExpHome = () => {
  const [pageNo, setPageNo] = useState(0);
  const [sPage, setSPage] = useState(0);
  const [ePage, setEPage] = useState(9);

  const [residentialTab, setResidentialTab] = useState(false);
  const [citiesTab, setCitiesTab] = useState(false);
  const [typeTab, setTypeTab] = useState(false);
  const [statusTab, setStatusTab] = useState(false);
  const [budgetTab, setBudgetTab] = useState(false);
  const totalItem = Homes.length;

  useEffect(() => {
    setPageNo(Math.ceil(totalItem / 9));
  }, []);

  return (
    <div>
      <div
        className="flex gap-8 p-2 items-center rounded-sm  mb-5"
        style={{ boxShadow: "0 2px  5px #aaaaaa" }}
      >
        <IoIosSearch className=" text-3xl " />
        <input
          type="text"
          placeholder="Enter Project Name"
          className="border-0 border-transparent focus:border-transparent focus:ring-0 w-full"
        />
      </div>
      <div className=" md:flex hidden  border-[1px] border-blue-500 justify-between">
        <div className="w-full">
          <div
            className="py-6 px-5 border-r-[1px] border-gray-400 w-full flex items-center justify-between "
            onClick={() => {
              setResidentialTab(!residentialTab);
              setTypeTab(false);
              setCitiesTab(false);
              setBudgetTab(false);
              setStatusTab(false);
            }}
          >
            <p>RESIDENTIAL</p>
            <IoIosArrowDown />
          </div>
          <div className={`relative  ${residentialTab ? "block" : "hidden"} `}>
            <div className="  absolute top-1 border-[1px] shadow-lg rounded-sm left-0 p-5 min-w-full bg-white z-10 flex flex-col gap-4    ">
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="rounded-full  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                  checked
                />
                <p>Residential</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="rounded-full  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Commercial</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="py-6 px-5 border-r-[1px] border-gray-400 w-full flex items-center justify-between "
            onClick={() => {
              setCitiesTab(!citiesTab);
              setTypeTab(false);
              setBudgetTab(false);
              setStatusTab(false);
              setResidentialTab(false);
            }}
          >
            <p>PUNE</p>
            <IoIosArrowDown />
          </div>
          <div className={`relative ${citiesTab ? "block" : "hidden"}`}>
            <div className="  absolute top-1 border-[1px] shadow-lg rounded-sm left-0 p-5 w-[42vw] bg-white z-10 flex  gap-x-14 gap-y-3 flex-wrap   ">
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Others</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                  checked
                />
                <p>Pune</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Bengaluru</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Noida</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Delhi</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Gurugram</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Mumbai</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="py-6 px-5 border-r-[1px] border-gray-400 w-full flex items-center justify-between "
            onClick={() => {
              setTypeTab(!typeTab);
              setCitiesTab(false);
              setBudgetTab(false);
              setStatusTab(false);
              setResidentialTab(false);
            }}
          >
            <p>2 BHK</p>
            <IoIosArrowDown />
          </div>
          <div className={`relative ${typeTab ? "block" : "hidden"}`}>
            <div className="  absolute top-1 border-[1px] shadow-lg rounded-sm left-0 p-5 min-w-full bg-white z-10 flex flex-col gap-4    ">
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>1 BHK</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                  checked
                />
                <p>2 BHK</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>3 BHK</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>4+ BHK</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Plots</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="py-6 px-5 border-r-[1px] border-gray-400 w-full flex items-center justify-between "
            onClick={() => {
              setStatusTab(!statusTab);
              setResidentialTab(false);
              setCitiesTab(false);
              setTypeTab(false);
              setBudgetTab(false);
            }}
          >
            <p>STATUS</p>
            <IoIosArrowDown />
          </div>
          <div className={`relative ${statusTab ? "block" : "hidden"}`}>
            <div className="  absolute top-1 border-[1px] shadow-lg rounded-sm left-0 p-5 min-w-full bg-white z-10 flex flex-col gap-4">
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>New Launch</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Ready Possession</p>
              </div>
              <div className="flex items-center  gap-6 bg-white">
                <input
                  type="checkbox"
                  className="  focus:bg-[#4395e0] focus:border-transparent focus:ring-0 h-6 w-6"
                />
                <p>Under Construction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="py-6 px-5  border-gray-400 w-full flex items-center justify-between "
            onClick={() => {
              setBudgetTab(!budgetTab);
              setCitiesTab(false);
              setStatusTab(false);
              setTypeTab(false);
              setResidentialTab(false);
            }}
          >
            <p>BUDGET</p>
            <IoIosArrowDown />
          </div>
          <div className={`relative ${budgetTab ? "block" : "hidden"}`}>
            <div className="  absolute top-1 border-[1px] shadow-lg rounded-sm left-0 p-5 w-[20vw] bg-white z-10   ">
              <div className="flex flex-col   gap-2 bg-white">
                <p>INR 0 - 20.00 Cr.</p>
                <input type="range" id="vol" name="vol" min="0" max="50" />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-black text-white m-3 px-10  ">RESET</button>
      </div>

      <div className="md:flex hidden items-center w-full my-8 ">
        <span className="mr-5">New Launches Only</span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <input type="checkbox" id="toggle" className="sr-only peer" />
          <div
            className="block relative bg-gray-300 w-16 h-9 p-1 rounded-full before:absolute before:bg-white before:w-7
       before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 
       peer-checked:before:left-8 peer-checked:before:bg-blue-500"
          ></div>
        </label>
      </div>
      <div>
        <div className="flex gap-4 justify-center">
          <p className="text-lg font-semibold mb-5 text-nowrap">
            EXPLORE HOMES
          </p>
        </div>
        <div className=" mt-6 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
          {Homes.slice(sPage, ePage).map((value, index) => {
            return <>{index < 9 ? <ExpHomeCards value={value} /> : null}</>;
          })}
        </div>

        <Pagination
          pageNo={pageNo}
          totalItem={totalItem}
          setSPage={setSPage}
          sPage={sPage}
          ePage={ePage}
          setEPage={setEPage}
        />
      </div>
    </div>
  );
};

export default ExpHome;
