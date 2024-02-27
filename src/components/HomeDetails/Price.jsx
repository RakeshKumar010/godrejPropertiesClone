import React, { useContext } from "react";
import { MyContext } from "../../App";

const Price = ({ bhk1, bhk2, bhk3 }) => {
  const { price } = useContext(MyContext);
  return (
    <div className="md:m-10 m-3" ref={price}>
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          PRICE
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
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
        <div></div>
      </div>
    </div>
  );
};

export default Price;
