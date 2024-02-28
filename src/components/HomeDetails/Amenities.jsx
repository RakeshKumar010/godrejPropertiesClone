import { useContext } from "react";
import Img2 from "../../assets/image/aminitzImg2.png";
import Img3 from "../../assets/image/aminitzImg3.png";
import Img4 from "../../assets/image/aminitzImg4.png";
import Img5 from "../../assets/image/aminitzImg5.png";
import Img6 from "../../assets/image/aminitzImg6.png";
import Img7 from "../../assets/image/aminitzImg7.png";
import Img8 from "../../assets/image/aminitzImg8.png";
import Img9 from "../../assets/image/aminitzImg9.png";
import { MyContext } from "../../App";
const Amenities = () => {
  const { amenities } = useContext(MyContext);
  return (
    <div className="md:p-10 bg-[#f4f1ec] p-2 md:pb-24" ref={amenities}>
      <div className="amenities-section-text flex  flex-wrap md:text-base text-sm justify-evenly gap-x-32 gap-y-10 py-20">
        <div className="flex flex-col gap-2 items-center ">
          <img src={Img3} alt="" className="md:w-28 w-20" />
          <p>Organic Spa</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img2} alt="" className="md:w-28 w-20" />
          <p>Swimming Pool</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img4} alt="" className="md:w-28 w-20" />
          <p>Digital Gym & Fitness Centre</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img5} alt="" className="md:w-28 w-20" />
          <p>Premium Guest Suites</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img6} alt="" className="md:w-28 w-20" />
          <p>Retail Stores</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img7} alt="" className="md:w-28 w-20" />
          <p>club house</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img8} alt="" className="md:w-28 w-20" />
          <p>parking </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src={Img9} alt="" className="md:w-28 w-20" />
          <p>Walking/Jogging Area </p>
        </div>
      </div>

      {/* <div
        style={{
          backgroundImage: `url('https://www.godrejproperties.com/_next/static/media/test.e7ccad97.webp')`,
          textAlign: "center",
        }}
      >
        <button class="bg-white sm:py-4 p-2 md:my-[5vw] my-3 text-nowrap   sm:w-1/4">
          Experience all lifestyle amenities
        </button>
      </div> */}
    </div>
  );
};

export default Amenities;
