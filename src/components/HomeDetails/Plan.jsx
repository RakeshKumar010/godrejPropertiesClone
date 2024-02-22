import React from "react";

const Plan = () => {
  return (
    <div className="md:m-10 m-3">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          PLANS
        </p>
      </div>
      <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase underline text-center">
        MASTER PLANS
      </p>
      <img
        src="https://delf2iyv2crlj.cloudfront.net/Images/dlr-Godrej-Emeraldwaters-Pune-Master-Plan-3840X2160%2094c70ff4-9fca-46a8-aaf3-3c12f22b3dcb.webp"
        alt="..."
        className="hover:border-2 hover:shadow-md"
      />
    </div>
  );
};

export default Plan;
