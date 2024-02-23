import Img from "../../assets/image/adresIcon.png";
import Img2 from "../../assets/image/adresIcon2.png";
import Img3 from "../../assets/image/adresIcon3.png";

const MapAddressCard = () => {
  return (
    <div style={{
        boxShadow:'0 0 8px gray'
    }} className="  pl-10 py-7 md:w-96 absolute top-10  rounded-md left-4 bg-white">
      <div className="text-gray-600 ">
        <p>ADDRESS</p>
        <p className="text-[12px] pr-10">
          Godrej Emerald Waters, MIDC, Pimpri Colony, Pimpri-Chinchwad, Pune,
          Maharashtra 411018
        </p>
      </div>
      <div className="flex flex-col gap-5 overflow-y-scroll  h-[22vw] mt-5 map-scroll">
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
      </div>
    </div>
  );
};

export default MapAddressCard;