import bottomLogo from "../assets/image/bottomlogo.png";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import GetTouch from "./GetTouch";

const Footer = () => {
  return (
    <>
     <GetTouch/>

    <footer className=" text-center  lg:text-left border-2">
      <div className="sm:px-10 sm:py-10 px-5 text-center md:text-left bg-[#fafafa]">
        <div className="grid-1 sm:grid gap-8 md:grid-cols-2 lg:grid-cols-6 hidden">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              ABOUT GODREJ PROPERTIES
            </h6>
            <p className="text-gray-500 text-sm">
              Established in 1990, Godrej P className="bg-gray-500"roperties is
              the first real estate company to have ISO certification. The
              company is currently developing landmark projects in 12 cities
              across India covering over 18.58 million square meters. Godrej
              Properties is known to bring innovation and excellence to the real
              estate industry.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              WORK WITH US
            </h6>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              ENQUIRE
            </h6>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              SCHEDULE A SITE VISIT
            </h6>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              OUR STORY
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Management
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Sustainability
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Design
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              PROJECTS
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                Residential
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Commercial
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              MEDIA CENTER
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                In The News
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Press Release
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Media Gallery
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              INVESTOR SECTION
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                Financials
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Investor Information
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Governance & Leadership
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Compliances
              </a>
            </p>
            <p>
              <a href="#!" className="">
                ESG Policies
              </a>
            </p>
          </div>
        </div>
        {/* new code  */}

        <div
          id="accordion-flush"
          className="sm:hidden block"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>OUR STORY</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden text-start"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className=" border-b border-gray-200 dark:border-gray-700 ">
              <p>About Us</p>
              <p>Management</p>
              <p>Sustainability</p>
              <p>Design</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>PROJECTS</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden text-start"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className=" border-b border-gray-200 dark:border-gray-700 ">
              <p>Residential</p>
              <p>Commercial</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>MEDIA CENTER</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden text-start"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className=" border-b border-gray-200 dark:border-gray-700 ">
              <p>In The News</p>
              <p>Press Release</p>
              <p>Media Gallery</p>
            </div>
          </div>

          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>INVESTOR SECTION</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden text-start"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className=" border-b border-gray-200 dark:border-gray-700 ">
              <p>Financials</p>
              <p>Investor Information</p>
              <p>Governance & Leadership</p>
              <p>Compliances</p>
              <p>ESG Policies</p>
            </div>
          </div>
        </div>

        {/* new code  */}
        <div className="flex items-center sm:justify-start justify-between gap-4 my-5">
          <p className="text-wrap md:text-base text-[12px]">FOLLOW US ON</p>
          <div className="flex items-center md:gap-4 gap-3">
            <RiFacebookFill className="md:text-3xl text-xl" />
            <FaSquareXTwitter className="md:text-3xl text-xl" />
            <IoLogoInstagram className="md:text-3xl text-xl" />
            <FaYoutube className="md:text-3xl text-xl" />
          </div>
        </div>
      </div>

      <div className=" md:px-11 py-6 flex gap-6 md:gap-0 flex-wrap justify-center md:justify-between ">
        <img src={bottomLogo} alt="..." className="md:h-12 h-6" />
        <div className="flex md:gap-10 gap-5">
          <div className="text-[10px] md:text-base">
            <span>Copyright © 2023 </span>
            <a href="https://tw-elements.com/">Botmedia Digital Marketing.</a>
          </div>
          <p className="text-[10px] md:text-base">Disclaimer</p>
          <p className="text-[10px] md:text-base">Sitemap</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
