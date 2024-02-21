import bottomLogo from "../assets/image/bottomlogo.png";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-center  lg:text-left border-2">
      <div className="px-10 py-10 text-center md:text-left bg-[#fafafa]">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
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
      <div className="flex items-center gap-4 my-5">
        <p className="text-wrap md:text-base text-[12px]" >FOLLOW US ON</p>
        <RiFacebookFill  className="md:text-4xl"/>
        <FaSquareXTwitter className="md:text-4xl"/>
        <IoLogoInstagram  className="md:text-4xl"/>
        <FaYoutube  className="md:text-4xl"/>
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
  );
};

export default Footer;
