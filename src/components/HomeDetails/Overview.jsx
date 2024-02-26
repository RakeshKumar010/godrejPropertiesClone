import React, { useContext } from "react";
import { MyContext } from "../../App";

const Overview = ({ovtext,ovimg}) => {
  const {overview}=useContext(MyContext)
  return (
    <div ref={overview} className="md:m-10 m-3">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold md:mb-5 mb-4 text-nowrap uppercase">
          Overview
        </p>
   
      </div> 
          <p className="text-center md:mb-10  mb-7 text-[12px] md:text-lg  text-gray-500">
      {ovtext}
        </p>
        <img src={ovimg} alt="...." />
    </div>
  );
};

export default Overview;
