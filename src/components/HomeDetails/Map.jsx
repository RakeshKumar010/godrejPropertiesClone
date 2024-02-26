import React, { useContext } from "react";
import MapAddressCard from "./MapAddressCard";
import { MyContext } from "../../App";

const Map = ({map,mapad,maptext}) => {
  const {location}=useContext(MyContext)
  return (
    <div className="md:my-16 md:mx-10 m-3  " ref={location}>
      <div className="flex flex-col gap-4 items-center py-8  mb-5">
        <p className="text-[12px] md:text-lg font-semibold text-nowrap uppercase ">
          NEIGHBOURHOOD
        </p>
        <p className="text-center md:mb-10  mb-7 text-[12px] md:text-lg  text-gray-500">
      {maptext}
        </p>
      </div>
      <div className="relative">
        <iframe
          src={map}
          className="w-full"
          height="590"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="My Map"
        />
        <MapAddressCard mapad={mapad} />
      </div>
    </div>
  );
};

export default Map;



