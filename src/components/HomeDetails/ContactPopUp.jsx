import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ContactPopUp = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="">
      <div className="-rotate-90 fixed  -right-[59px] top-[50%] cursor-pointer border-2 border-black py-4 px-10 rounded-lg border-b-0 rounded-b-none bg-white" onClick={()=>{
        setIsOpen(true)
      }}>
        <p className="text-[10px]">SCHEDULE A VISIT</p>
      </div>
      <div className={`md:w-[400px] w-full shadow-lg rounded-md  rounded-r-none fixed right-0 px-10 py-6 top-36 bg-white z-10  flex-col gap-5 ${isOpen?'flex':'hidden'}`}>
        <IoMdClose className="absolute top-3 font-bold right-3 text-2xl cursor-pointer " onClick={()=>{
              setIsOpen(false)
        }}/>

        <p className="text-lg font-semibold">SCHEDULE YOUR TOUR</p>
        <div className="flex  gap-2 justify-between">
          <input
            type="text"
            placeholder="First Name"
            className="border-0 border-b-2 w-[47%]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-0 border-b-2 w-[47%]"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border-0 border-b-2"
        />
        <input
          type="number"
          placeholder="Mobile number"
          className="border-0 border-b-2"
        />
        <div>
          <input type="date" />
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <p className="-m-2">
            Yes, I would like to receive updates & promotions from Godrej
            Properties Limited.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="py-3 px-8 bg-black text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopUp;
