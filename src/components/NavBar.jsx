import Logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch, IoIosCall } from "react-icons/io";
import NavLists from "./NavLists";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [navTab, setNavTab] = useState(false);
  return (
    <div className="flex justify-between p-4 md:px-12 md:py-4 fixed z-50 left-0 right-0 top-0 bg-gradient-to-b from-gray-900">
      <Link to={'/'}>
      <img src={Logo} alt="... " className="md:h-12 h-6" />
      </Link>

      <div className="flex gap-5 cursor-pointer">
        <IoIosCall className="bg-gray-300/25 text-white/40 text-5xl rounded-full p-3 md:block hidden " />
        <IoIosSearch className="bg-gray-300/25 text-white/40 text-3xl md:text-5xl rounded-full md:p-3 p-1" />
        <IoMenu
          className="bg-gray-300/25 text-white text-3xl md:text-5xl rounded-full md:p-3 p-1"
          onClick={() => {
            setNavTab(!navTab);
          }}
        />
      </div>
      {navTab ? <NavLists setNavTab={setNavTab} navTab={navTab} /> : null}
    </div>
  );
};

export default NavBar;
