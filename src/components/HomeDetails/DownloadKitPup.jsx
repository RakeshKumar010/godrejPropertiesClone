import { IoMdClose } from "react-icons/io";

const DownloadKitPup = ({setIsOpen}) => {
  return (
    <div className="fixed z-50 bg-black/20 flex justify-center items-center w-full h-screen top-0 right-0 bottom-0 left-0">
      <div className="md:w-96 w-full bg-white shadow-sm p-6 pt-12 flex flex-col gap-5  rounded-md relative">
        <IoMdClose className="absolute top-2 right-2 text-2xl font-extrabold cursor-pointer" onClick={()=>{
            setIsOpen(false)
        }}/>
        <p className="text-lg font-semibold text-center">
          FILL IN YOUR DETAILS TO DOWNLOAD THE KIT
        </p>

        <p className="text-[10px]">
          Fill in the following details and we will get back to you shortly.
        </p>
        <form className="flex flex-col gap-6">
          <input type="text" placeholder="Name *" required className="w-full border-0 border-b-[1px] px-0 focus:ring-0"/>
          <input type="email" placeholder="Email *" required className="w-full border-0 border-b-[1px] px-0 focus:ring-0"/>
          <input type="text" placeholder="Country *" required className="w-full border-0 border-b-[1px] px-0 focus:ring-0"/>
          <input type="number" placeholder="Phone +91" className="w-full border-0 border-b-[1px] px-0 focus:ring-0" />
          <div className="flex gap-2">
            <input type="checkbox" className="mt-2" required/>
            <p>
              Yes, I would like to receive updates & promotions from Godrej
              Properties Limited.
            </p>
          </div>
            <button className="w-full border-[1px] py-3 border-black">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DownloadKitPup;
