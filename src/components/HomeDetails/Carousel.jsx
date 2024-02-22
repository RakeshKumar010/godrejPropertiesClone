import React from "react";
import HomeDetailsNav from "./HomeDetailsNav";
import SliderImg from '../../assets/image/banner.webp'
import SliderImg1 from '../../assets/image/slider1.jpg'
import SliderImg2 from '../../assets/image/slider2.jpg'
import SliderImg3 from '../../assets/image/slider3.jpg'
import SliderImg4 from '../../assets/image/slider4.jpg'

const Carousel = () => {
  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
        <HomeDetailsNav/>
      {/* <!-- Carousel wrapper --> */}
      <div className="relative overflow-hidden h-[72vh] md:h-[90vh]">

        
        {/* <!-- Item 1 --> */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src={SliderImg4}
            className="absolute block w-full h-full bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={SliderImg1}
            className="absolute block w-full h-full bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={SliderImg2}
            className="absolute block w-full h-full bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={SliderImg3}
            className="absolute block w-full h-full bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>

        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={SliderImg}
            className="absolute block w-full h-full bg-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
     
      <div className="bg-gray-900/50 p-5 absolute md:bottom-10 md:left-10 bottom-5 left-2 z-30 text-white ">
        <p className="text-sm font-bold md:text-base">GODREJ EMERALD WATERS</p>
        <p className="text-[12px] md:text-base my-2">PIMPRI - CHINCHWAD, PUNE</p>
        <div className="flex gap-x-3 md:text-base text-[12px] flex-wrap">
          <p>
            {" "}
            <span> INR</span>1.29 Cr. onwards
          </p>
          <span> | </span>
          <p>
            <span>Possession </span> March 2028 
          </p>
          <span> | </span>
          <p>2 & 3 BHK</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
