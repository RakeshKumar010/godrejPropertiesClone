import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const HomeDetailsNav = () => {
  const {overview,location,plans,price,amenities}=useContext(MyContext)
  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    const show = window.scrollY > 50;
    if(show){
      setNavBackground('bg-black/30');
    } else {
      setNavBackground('bg-transparent');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (elementRef) => {
    const offset = 100; // Change this value to the amount of space you want
    window.scrollTo({
      top: elementRef.current.offsetTop-offset,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex justify-between py-4 fixed top-14 md:top-20 z-50 left-0 right-0 border-t-2 px-3 md:px-10 ${navBackground}`}>
      <Link
        to={"../"}
        className="back-block flex items-center text-white font-semibold text-[12px] md:text-lg"
      >
        <FaArrowLeftLong />
        <span className="ml-2 md:block hidden">Back</span>
      </Link>
      <ul className="flex items-center text-white gap-6 font-semibold text-[12px] md:text-lg">
        <li className="cursor-pointer">
          <p
            onClick={() => {
              scrollToSection(overview);
            }}
          >
            Overview
          </p>
        </li>
        <li className="cursor-pointer">
          <p
            onClick={() => {
              scrollToSection(location);
            }}
          >
            Location
          </p>
        </li>
        <li className="cursor-pointer">
          <p
            onClick={() => {
              scrollToSection(plans);
            }}
          >
            Plans
          </p>
        </li>
        <li className="cursor-pointer">
          <p
            onClick={() => {
              scrollToSection(price);
            }}
          >
            Price
          </p>
        </li>
        <li className="md:block hidden cursor-pointer">
          <p
            onClick={() => {
              scrollToSection(amenities);
            }}
          >
            Amenities
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HomeDetailsNav;
