import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { useState } from "react";
import EnquirePopUp from "./EnquirePopUp";

const FooterContact = ({ name }) => {
  const phone = "917400087849";
  const message = `I'm interested in ${name}, Pune`;
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  return (
    <>
      {isOpen ? (
        <EnquirePopUp
          setIsOpenEnquire={setIsOpen}
          heading={heading}
          name={name}
        />
      ) : null}

      <div className="flex justify-between md:justify-around py-2 px-6 border-2 fixed bottom-0 right-0 left-0 bg-white lg:hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <PiWhatsappLogoThin className="text-" />
          <p className="text-sm ">WHATSAPP</p>
        </a>
        <div
          className="flex flex-col items-center"
          onClick={() => {
            setIsOpen(true);
            setHeading("Contact Us");
          }}
        >
          <PiNotebookLight className="text-" />
          <p className="text-sm ">CONTACT US</p>
        </div>
        <div className="flex flex-col items-center"      onClick={() => {
              setIsOpen(true);
              setHeading("Request a call");
            }}>
          <IoCallOutline className="text-" />
          <p className="text-sm ">CALL UP</p>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
