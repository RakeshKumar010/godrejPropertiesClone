import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HighLiving = () => {
  return (
    <div className="bg-custom-stone pb-14 ">
      <div className="flex gap-3 items-center  py-5  text-[11px] px-5 md:px-12 ">
        <p>Home</p>
        <MdKeyboardDoubleArrowRight />
        <p>Projects</p>
        <MdKeyboardDoubleArrowRight />
        <p className="text-[#7499aa]">Residential</p>
      </div>
      <div>
        <p className="text-center text-lg font-bold p-3">High living, higher thinking in Pune</p>
        <p className="text-center w-[90vw] md:w-[70vw] mx-auto md:text-lg">
          Life is all about simpler joys and living in Pune is about cherishing
          those simple joys. With pleasant weather, a rapidly growing IT sector,
          and opulent neighbourhoods, Pune is ranked as one of the most livable
          cities in India. The second-largest city in Maharashtra, Pune has
          people from all over India moving in to work and live. The easy
          availability of a varied range of housing options such as 2 BHK flats,
          apartments, duplex flats, etc. further makes Pune an ideal destination
          for working professionals and job seekers.
          <br /> <br /> 
          And with one after another state-of-the-art residential project,
          Godrej Properties makes Pune move-in ready. Godrej has its luxurious 2
          BHK flats in Pune’s most elegant localities. Replete with all the
          modern and essential amenities and facilities, the residential
          projects feature 2 BHK flats on sale that exude class and opulence.
        </p>
      </div>
    </div>
  );
};

export default HighLiving;
