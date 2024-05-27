import Logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import {  IoIosCall } from "react-icons/io";
import NavLists from "./NavLists";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsChatDotsFill } from "react-icons/bs";
import EnquirePopUp from "./EnquirePopUp";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");

  const [navTab, setNavTab] = useState(false);
   
  return (
    <>
    {isOpen ? (
      <EnquirePopUp
        setIsOpenEnquire={setIsOpen}
        heading={heading}
        
      />
    ) : null}
    <div className="flex justify-between p-4 md:px-12 md:py-4 fixed z-50 left-0 right-0 top-0 bg-gradient-to-b from-gray-900">
      <Link to={'/'}>
      <img src={Logo} alt="... " className="md:h-12 h-6" />
      </Link>

      <div className="flex gap-5 cursor-pointer">
      <a target="_blank" href="tel:918208958245">
        <IoIosCall className="bg-gray-300/25 text-white  text-3xl md:text-5xl  rounded-full md:p-3 p-1  " />
        </a>
        
        <BsChatDotsFill   onClick={() => {
            setIsOpen(true);
            setHeading("Contact Us");
          }} className="bg-gray-300/25 text-white text-3xl md:text-5xl rounded-full md:p-3 p-1" />
        <IoMenu
          className="bg-gray-300/25 text-white text-3xl md:text-5xl rounded-full md:p-3 p-1"
          onClick={() => {
            setNavTab(!navTab);
          }}
        />
      </div>
      {navTab ? <NavLists setNavTab={setNavTab} navTab={navTab} /> : null}
    </div>
    </>
  );
};

export default NavBar;
