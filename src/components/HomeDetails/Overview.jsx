import React, { useContext } from "react";
import { MyContext } from "../../App";

const Overview = ({img}) => {
  const {overview}=useContext(MyContext)
  return (
    <div ref={overview} className="md:m-10 m-3">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold md:mb-5 mb-4 text-nowrap uppercase">
          Overview
        </p>
   
      </div> 
          <p className="text-center md:mb-10  mb-7 text-[12px] md:text-lg  text-gray-500">
          Nestled between Baner (Residential Hub) & Hinjewadi (IT Hub), Baner-Mahalunge road is a striking prelude to ever-growing Pune.
        </p>
        <img src={"https://delf2iyv2crlj.cloudfront.net/Images/ed9626fa-62bd-495d-a303-a3137bce1729.webp"} alt="...." />
    </div>
  );
};

export default Overview;
