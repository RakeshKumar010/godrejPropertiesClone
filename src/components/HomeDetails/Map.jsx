import React, { useContext } from "react";
import MapAddressCard from "./MapAddressCard";
import { MyContext } from "../../App";

const Map = () => {
  const {location}=useContext(MyContext)
  return (
    <div className="md:my-16 md:mx-10 m-3  " ref={location}>
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase py-16">
          NEIGHBOURHOOD
        </p>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120976.60597935974!2d73.7921444!3d18.640695150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708599506283!5m2!1sen!2sin"
          className="w-full"
          height="590"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="My Map"
        />
        <MapAddressCard />
      </div>
    </div>
  );
};

export default Map;
