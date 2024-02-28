import Img from "../../assets/image/adresIcon.png";
import Img2 from "../../assets/image/adresIcon2.png";
import Img3 from "../../assets/image/adresIcon3.png";

const MapAddressCard = ({mapad}) => {
  return (
    <div style={{
        boxShadow:'2px 2px 5px gray'
    }} className=" rounded-l-none pl-10 py-7 md:w-96 absolute md:bottom-20 bottom-36  rounded-md  bg-white">
      <div className="text-gray-600 ">
        <p>ADDRESS</p>
        <p className="text-[12px] pr-10">
         {mapad}
        </p>
      </div>
      {/* <div className="flex flex-col gap-5 overflow-y-scroll  h-[22vw] mt-5 map-scroll">
        <div className="flex gap-5 items-center pr-10">
          <img src={Img} alt=".." />
          <p className="text-[10px] text-gray-600">
            Double Tree by Hilton- 15 mins drive
          </p>
        </div>
        <div className="flex gap-5 items-center pr-10">
          <img src={Img2} alt=".." />
          <p className="text-[10px] text-gray-600">
            Automobile Manufacturing Hubs - 15 mins drive
          </p>
        </div>
        <div className="flex gap-5 items-center pr-10">
          <img src={Img3} alt=".." />
          <p className="text-[10px] text-gray-600">
            Aditya Birla Memorial Hospital - 20 mins drive
          </p>
        </div>
        <div className="flex gap-5 items-center pr-10">
          <img src={Img2} alt=".." />
          <p className="text-[10px] text-gray-600">
            Hinjewadi IT Park - 30 mins drive
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default MapAddressCard;
