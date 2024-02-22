import React from "react";

const Price = () => {
  return (
    <div className="md:m-10 m-3">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          PRICE
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="">
            <p className="md:py-6 py-4 text-center text-[11px] md:text-base text-white bg-[#c3aa62]">PRICE</p>
            <div className="md:text-base text-[11px]">
              <div className="flex justify-between p-6 border-[1px]">
                <p className="font-semibold">2 BHK</p>
                <p>₹1.29 Cr. onwards</p>
              </div>
              <div className="flex justify-between p-6 border-[1px]">
                <p className="font-semibold">3 BHKK</p>
                <p>₹3.20 Cr. onwards</p>
              </div>
            </div>
          </div>
          <p className="text-center md:text-balance py-5 text-[12px] ">GST, AMC, IFMS & other charges additional*</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Price;
