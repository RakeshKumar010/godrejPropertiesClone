import { IoCloseSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Homes from "../data/Homes";
import { useState } from "react";
import { GrSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavLists = ({ setNavTab, navTab }) => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  return (
    <div
      className="absolute overflow-y-scroll top-0 w-full lg:w-[44vw] z-50 bg-black/90 right-0 px-8 py-4 flex flex-col gap-5 h-screen  text-gray-100"
      data-aos="fade-left"
    >
      <div className="flex flex-col gap-5 font-bold lg:w-1/2">
        <div className="flex gap-2 cursor-pointer text-gray-100">
          <IoCloseSharp
            className="text-2xl"
            onClick={() => {
              setNavTab(!navTab);
            }}
          />
          <p className="">CLOSE</p>
        </div>
        <Link to={'https://save-max.vercel.app'}>
        <p className=" hover:text-green-800 delay-[30ms] cursor-pointer transition-all"  onClick={() => {
              setNavTab(!navTab);
            }}>
          HOME
        </p>
        </Link>
        <div className="flex flex-col justify-between  w-full  ">
          <div
            className="flex justify-between items-center w-full hover:text-green-800 delay-[30ms] cursor-pointer transition-all"
            onClick={() => {
              setIsProjectOpen(!isProjectOpen);
            }}
          >
            <p>PROJECTS</p>
            {isProjectOpen ? <GrSubtract /> : <IoMdAdd className="text-sm" />}
          </div>
          {isProjectOpen ? (
            <div className=" ml-4 mt-2 -0 ">
              {Homes.map(({ name, id }) => {
                return (
                  <Link to={"/properties-details/" + id} onClick={() => {
                    setNavTab(!navTab);
                  }}>
                    <p className="uppercase hover:text-green-800 delay-[30ms] cursor-pointer transition-all mt-2">
                      {name}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-4 font-bold">
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          ENQUIRE
        </p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          SCHEDULE A SITE VISIT
        </p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          WORK WITH US
        </p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          REACH US
        </p>
      </div>
    </div>
  );
};

export default NavLists;
