import React from "react";

const Amenities = () => {
  return (
    <div className="md:p-10 bg-[#f4f1ec]">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          AMENITIES THAT BRING HAPPINESS & JOY EVERYDAY
        </p>
      </div>

      <p className="text-center md:mb-10  mb-7 text-[12px] md:text-lg text-gray-500">
        Your new home at Godrej Serene is tailored to your needs. It has been
        crafted thoughtfully to give you the best of amenities and comforts.
      </p>
      <div style={{backgroundImage:`url('https://www.godrejproperties.com/_next/static/media/test.e7ccad97.webp')`,textAlign:'center'}}>
      <button class="bg-white sm:py-4 p-2 md:my-[5vw] my-3 text-nowrap   sm:w-1/4">Experience all lifestyle amenities</button>

      </div>
    </div>
  );
};

export default Amenities;
