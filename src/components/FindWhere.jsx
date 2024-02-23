import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import ExpHome from "./ExpHome";
import ExMap from "./ExMap";
const FindWhere = () => {
  const [changeSec,setChangeSec]=useState(true)
  return (
    <div className="m-5 md:m-16">
      <div className="mb-10">
        <div className="flex gap-4 justify-center">
          <p className="text-lg font-semibold mb-5 text-nowrap">
            FIND WHERE YOU BELONG
          </p>
        </div>
        <div className="flex gap-12 justify-center ">
          <div className={`flex items-center gap-1 cursor-pointer ${changeSec?'text-gray-700':'text-gray-400'}`} onClick={()=>{
            setChangeSec(true)
          }}>
            <TfiMenuAlt className={`text-2xl font-thin  `} />
            <p className={`${changeSec?'underline':''} underline-offset-4 decoration-1 text-nowrap`}>
              List View
            </p>
          </div>
          <div className={`flex items-center gap-1   cursor-pointer ${changeSec?'text-gray-400':'text-gray-700'}`} onClick={()=>{
            setChangeSec(false)
          }}>
            <SlLocationPin />
            <p className={`${changeSec?'':'underline'} text-nowrap`}>Map View</p>
          </div>
        </div>
      </div>
      {changeSec?<ExpHome />:<ExMap/>}
      
    </div>
  );
};

export default FindWhere;
