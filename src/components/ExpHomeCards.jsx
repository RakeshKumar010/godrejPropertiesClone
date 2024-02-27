import { RiHome4Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineBed } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { BiMessageRoundedError } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";



const ExpHomeCards = ({ value }) => {
  const { id, name, img, price, location, status, space, date } = value;
  const [isOpen,setIsOpen]=useState(false)
  return (
    <Link
      to={"./properties-details/" + id}
      className="property-single col-span-1 mx-auto mt-6  flex flex-col hover:shadow-lg p-3 "
      style={{ opacity: 1, transform: "none" }}
    >
      <figure className="property-picture undefined relative">
        <img src={img} alt={name} />
        <div className={`top-0  right-0 left-0 bg-black/80 absolute text-white py-7 h-full px-5 text-[10px] ${isOpen?'block ':'hidden'} `}>
          <div className="flex gap-16 py-4">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <MdOutlineBed className="text-xl" />
                <p>Beds</p>
              </div>
              <div className="flex gap-3 items-center">
                <SlSizeFullscreen className="text-xl" />
                <p>Area</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineCurrencyRupee className="text-xl" />
                <p>Price</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p>{space}</p>
              <p>Available on Request</p>
              <p>INR {price} Onwards</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3 text-green-400 py-4">
              <div className="flex gap-3 items-center">
                <BiMessageRoundedError className="text-xl" />
                <p>Enquire Now</p>
              </div>
              <div className="flex gap-3 items-center">
                <BsCalendar2Date className="text-base" />
                <p>Schedule a Visit</p>
              </div>
              <div className="flex gap-3 items-center">
                <LuPhoneCall className="text-lg" />
                <p>Call Us</p>
              </div>
              <div className="flex gap-3 items-center">
                <SiWhatsapp className="text-xl" />
                <p>WhatsApp</p>
              </div>
            </div>
        </div>
      </figure>
      <div className="property-info flex flex-col">
        <div className="property-location mt-2 flex items-center justify-between">
          <span className="uppercase undefined text-[12px]">{location}</span>
          <IoIosAddCircleOutline className="text-3xl transition-all duration-150 hover:rotate-[225deg]" onMouseLeave={()=>{
            setIsOpen(false)

          }}  onMouseOver={()=>{
            setIsOpen(true)
          }}/>
        </div>

        <p className="undefined mt-3 font-semibold  ">{name}</p>
        <div className="property-status undefined mt-4 flex text-[12px] font-semibold items-center py-1 px-2">
          <RiHome4Line className="text-[#1681c3] " />
          <span className="uppercase ml-2">{status}</span>
        </div>
        <div className="property-details mt-4 flex flex-wrap items-center">
          <div className="mt-1 undefined text-[12px]">
            <span className="font-semibold">INR</span>
            <span className="ml-1">{price} onwards</span>
          </div>

          <div className="separator text-[12px] ">
            <span className="mx-4">|</span>
          </div>
          <div className="mt-1 undefined text-[12px]">
            <span className="font-semibold">Possession Date</span>
            <span className="ml-1">{date}</span>
          </div>
        </div>
        <div className="mt-1 undefined text-[12px]">
          <span>{space}</span>
        </div>
      </div>
    </Link>
  );
};

export default ExpHomeCards;
