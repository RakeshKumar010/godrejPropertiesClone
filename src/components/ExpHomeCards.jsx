import { RiHome4Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const ExpHomeCards = ({ value }) => {
  const { name, img, price, location, status, space, date } = value;
  return (
    <Link to={'./properties-details'}
      className="property-single col-span-1 mx-auto mt-6  flex flex-col "
      style={{ opacity: 1, transform: "none" }}
    >
      <figure className="property-picture undefined">
        <img src={img} alt={name} />
      </figure>
      <div className="property-info flex flex-col">
        <div className="property-location mt-2 flex items-center justify-between">
          <span className="uppercase undefined text-[12px]">{location}</span>
          <IoIosAddCircleOutline className="text-3xl" />
        </div>

        <p className="undefined mt-3 font-semibold  ">{name}</p>
        <div className="property-status undefined mt-4 flex text-[12px] font-semibold items-center py-1 px-2">
          <RiHome4Line className="text-[#1681c3] " />
          <span className="uppercase ml-2">{status}</span>
        </div>
        <div className="property-details mt-4 flex flex-wrap items-center">
          <div className="mt-1 undefined text-[12px]">
            <span className="font-semibold">INR</span>
            <span className="ml-1">{price} onwards</span>
          </div>

          <div className="separator text-[12px] ">
            <span className="mx-4">|</span>
          </div>
          <div className="mt-1 undefined text-[12px]">
            <span className="font-semibold">Possession Date</span>
            <span className="ml-1">{date}</span>
          </div>
        </div>
        <div className="mt-1 undefined text-[12px]">
          <span>{space}</span>
        </div>
      </div>
    </Link>
  );
};

export default ExpHomeCards;
