import React from "react";

const GetTouch = () => {
  return (
    <div className="bg-[#f2eee8] py-14 md:px-40 px-7">
      <div className="flex justify-center ">
        <p className="text-lg font-bold mb-3 text-nowrap ">GET IN TOUCH</p>
      </div>
      <p className="mx-auto text-center md:text-lg  mb-10 max-w-[800px] text-gray-600">
        if you would like to know more details or something specific, feel free
        to contact us. Our site representative will give you a call back.
      </p>
      <div className="md:bg-white md:shadow-xl px-5">
        <div className="flex flex-wrap justify-between items-center  ">
          <input
            type="text"
            className="border-0 border-b-2 border-gray-600 bg-transparent py-2"
            placeholder="Name"
          />
          <div>
            <input
              type="text"
              className="border-0 border-b-2 border-gray-600 bg-transparent py-2"
              placeholder="Mobile Number"
            />
          </div>
          <input
            type="text"
            className="border-0 border-b-2 border-gray-600 bg-transparent py-2"
            placeholder="Email ID"
          />
          
          <button className="py-3 hidden md:block px-10 bg-black  text-white md:mt-4">
            SEND
          </button>
        </div>
        <div class=" md:flex hidden items-start md:mb-4 text-sm py-5 md:py-10  ">
            <input
              type="checkbox"
              id="terms"
              class="h-5 w-5 text-blue-600 rounded mr-3 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <label for="terms" class="font-medium text-gray-700 ">
              Yes, I would like to receive updates & promotions from Godrej
              Properties Limited.
            </label>
          </div>
       
      </div>
      <div class=" flex md:hidden items-start md:mb-4 text-sm py-5 md:py-10  ">
            <input
              type="checkbox"
              id="terms"
              class="h-5 w-5 text-blue-600 rounded mr-3 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <label for="terms" class="font-medium text-gray-700 ">
              Yes, I would like to receive updates & promotions from Godrej
              Properties Limited.
            </label>
          </div>
          <button className="py-3 block md:hidden px-10 bg-black mx-auto text-white md:mt-4">
            SEND
          </button>
    </div>
  );
};

export default GetTouch;
