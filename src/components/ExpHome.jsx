import React, { useState, useEffect } from "react";
import ExpHomeCards from "./ExpHomeCards";
import Homes from "../data/Homes";
import Pagination from "./Pagination";
import { IoIosSearch } from "react-icons/io";

const ExpHome = () => {
  const [pageNo, setPageNo] = useState(0);
  const [sPage,setSPage]=useState(0)
  const[ePage,setEPage]=useState(9)
  const totalItem =Homes.length;
  

  useEffect(() => {
    setPageNo(Math.ceil(totalItem / 9));
    
  }, []);

  return (
    <div>
    <div
    className="flex gap-8 p-2 md:p-4 mb-5"
    style={{ boxShadow: "0 0 8px gray" }}
  >
    <IoIosSearch className=" text-3xl " />
    <input type="text" placeholder="Enter Project Name" className="border-0 border-transparent focus:border-transparent focus:ring-0 w-full"/>
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
    <div>
      <div className="flex gap-4 justify-center">
        <p className="text-lg font-semibold mb-5 text-nowrap">EXPLORE HOMES</p>
      </div>
      <div className=" mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Homes.slice(sPage,ePage).map((value, index) => {
          return (
            <>
              {index < 9 ? <ExpHomeCards value={value} /> : null}
            </>
          );
        })}
      </div>
      

      <Pagination pageNo={pageNo} totalItem={totalItem} setSPage={setSPage} sPage={sPage} ePage={ePage} setEPage={setEPage}/>
    </div>
    </div>
  );
};

export default ExpHome;
