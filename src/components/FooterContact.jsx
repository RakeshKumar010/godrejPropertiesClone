import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";


const FooterContact = () => {
  return (
    <div className="flex justify-between md:justify-around py-2 px-6 border-2 fixed bottom-0 right-0 left-0 bg-white lg:hidden">
        <div className="flex flex-col items-center">
            <PiWhatsappLogoThin className="text-"/>
            <p className="text-sm ">WHATSAPP</p>
        </div>
        <div className="flex flex-col items-center">
            <PiNotebookLight className="text-"/>
            <p className="text-sm ">CONTACT US</p>
        </div>
        <div className="flex flex-col items-center">
            <IoCallOutline className="text-"/>
            <p className="text-sm ">CALL UP</p>
        </div>
    </div>
  )
}

export default FooterContact