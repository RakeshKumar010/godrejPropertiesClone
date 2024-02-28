import React, { useContext } from "react";
import { MyContext } from "../../App";
import EmiCalculator from "./EmiCalculator";

const Price = ({ bhk1, bhk2, bhk3 }) => {
  const { price } = useContext(MyContext);
  return (
    <div className="md:m-10 m-3 flex flex-col items-center" ref={price}>
   
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase ">
          PRICE
        </p>
  
      <div className="flex flex-wrap justify-center gap-10">
        <div className="md:w-[520px] w-full">
          <div className="">
            <p className="md:py-6 py-4 text-center text-[11px] md:text-base text-white bg-[#c3aa62]">
              PRICE
            </p>
            <div className="md:text-base text-[11px]">
              {bhk1 ? (
                <div className="flex justify-between p-6 border-[1px]">
                  <p className="font-semibold">1 BHK</p>
                  <p><span className="font-semibold"> ₹{bhk1}</span> onwards</p>
                </div>
              ) : null}
              {bhk2 ? (
                <div className="flex justify-between p-6 border-[1px]">
                  <p className="font-semibold">2 BHK</p>
                  <p><span className="font-semibold"> ₹{bhk2}</span> onwards</p>
                </div>
              ) : null}
              {bhk3 ? (
                <div className="flex justify-between p-6 border-[1px]">
                  <p className="font-semibold">3 BHK</p>
                  <p><span className="font-semibold"> ₹{bhk3}</span>  onwards</p>
                </div>
              ) : null}
            </div>
          </div>
          <p className="text-center md:text-balance py-5 text-[12px] ">
            GST, AMC, IFMS & other charges additional*
          </p>
        </div>
        <EmiCalculator/>

      </div>
    </div>
  );
};

export default Price;
