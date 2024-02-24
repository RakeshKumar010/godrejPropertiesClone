
import { Carousel } from 'flowbite-react'
import SliderImg from '../../assets/image/banner.webp'
import SliderImg1 from '../../assets/image/slider1.jpg'
import SliderImg2 from '../../assets/image/slider2.jpg'
import SliderImg3 from '../../assets/image/slider3.jpg'
import SliderImg4 from '../../assets/image/slider4.jpg'
import HomeDetailsNav from './HomeDetailsNav'
const PropertieCarousel = ({name,location,price,date,space}) => {
    const data =[
        SliderImg,
        SliderImg1,
        SliderImg2,
        SliderImg3,
        SliderImg4
    ]
  return (
    <div className="relative  h-[72vh] md:h-[90vh]">
           <HomeDetailsNav/>
       
      <Carousel >
        {data &&
          data.map((value) => {
            return <img src={value} alt="..." className="w-full h-full  bg-contain " />;
          })}
      </Carousel>
      <div className="bg-gray-900/50 p-5 absolute md:bottom-10 md:left-10 bottom-5 left-2 z-30 text-white ">
        <p className="text-sm font-bold md:text-base">{name} </p>
        <p className="text-[12px] md:text-base my-2">{location}</p>
        <div className="flex gap-x-3 md:text-base text-[12px] flex-wrap">
          <p>
            {" "}
            <span> INR</span>{price} onwards
          </p>
          <span> | </span>
          <p>
            <span>Possession </span> {date}
          </p>
          <span> | </span>
          <p>{space}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertieCarousel;
