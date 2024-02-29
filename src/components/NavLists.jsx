import { IoCloseSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
const NavLists = ({setNavTab,navTab}) => {
  return (
    <div className="absolute top-0 w-full lg:w-[44vw] z-50 bg-black/90 right-0 px-8 py-4 flex flex-col gap-10 h-screen  text-gray-700" data-aos="fade-left">
      <div className="flex flex-col gap-5 font-bold lg:w-1/2">
        <div className="flex gap-2 cursor-pointer text-gray-100">
        <IoCloseSharp className="text-2xl" onClick={()=>{
            setNavTab(!navTab)
        }}/>
        <p className="">CLOSE</p>

        </div>
        <p className=" hover:text-green-800 delay-[30ms] cursor-pointer transition-all" >HOME</p>
        <div className="flex justify-between items-center hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          <p>PROJECTS</p>
          <IoMdAdd />
        </div>
        <p className=" hover:text-green-800 delay-[30ms] cursor-pointer transition-all">HOME ALLY</p>
        <div className="flex justify-between items-center hover:text-green-800 delay-[30ms] cursor-pointer transition-all ">
          <p>INVESTONS</p>
          <IoMdAdd />
        </div>
        <div className="flex justify-between items-center hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          <p>MEDIA CENTER</p>
          <IoMdAdd />
        </div>
        <div className="flex justify-between items-center hover:text-green-800 delay-[30ms] cursor-pointer transition-all">
          <p>NRI CORNER</p>
          <IoMdAdd />
        </div>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">BLOGS</p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">OUR STORY</p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">GODREJ AMASSADOR</p>
      </div>
      <div className="flex flex-col gap-4 font-bold">
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">ENQUIRE</p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">SCHEDULE A SITE VISIT</p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">WORK WITH US</p>
        <p className="hover:text-green-800 delay-[30ms] cursor-pointer transition-all">READH US</p>
      </div>
    </div>
  );
};

export default NavLists;
