import Logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch, IoIosCall } from "react-icons/io";
const NavBar = () => {
  return (
    
    <div className="flex justify-between p-4 md:px-12 md:py-4 fixed z-50 left-0 right-0 top-0 bg-gradient-to-b from-gray-900">
      <img src={Logo} alt="... " className="md:h-12 h-6" />

      <div className="flex gap-5">
        <IoIosCall className="bg-gray-300/25 text-white text-5xl rounded-full p-3 md:block hidden " />
        <IoIosSearch className="bg-gray-300/25 text-white text-3xl md:text-5xl rounded-full md:p-3 p-1" />
        <IoMenu className="bg-gray-300/25 text-white text-3xl md:text-5xl rounded-full md:p-3 p-1" />
      </div>
    </div>
    
  );
};

export default NavBar;
