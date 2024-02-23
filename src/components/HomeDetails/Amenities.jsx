import Img from "../../assets/image/aminitzImg.png";
import Img2 from "../../assets/image/aminitzImg2.png";

const Amenities = () => {
  return (
    <div className="md:p-10 bg-[#f4f1ec] pb-24">

        <div className="amenities-section-text flex items-end  md:text-base text-sm justify-center md:gap-36 py-20">
          <div className="">
         
            <p>Alfresco Dining</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={Img} alt="" className="md:w-28 w-20" />
            <p>40 - seater theatre</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={Img2} alt="" className="md:w-28 w-20" />
            <p>Half Olympic size Infinti pool</p>
          </div>
        </div>
   

      <div
        style={{
          backgroundImage: `url('https://www.godrejproperties.com/_next/static/media/test.e7ccad97.webp')`,
          textAlign: "center",
        }}
      >
        <button class="bg-white sm:py-4 p-2 md:my-[5vw] my-3 text-nowrap   sm:w-1/4">
          Experience all lifestyle amenities
        </button>
      </div>
    </div>
  );
};

export default Amenities;
