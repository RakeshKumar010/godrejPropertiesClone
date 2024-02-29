import { useContext, useState } from 'react';
import ReraQr from '../../assets/image/reraqr.jpg'
import { MyContext } from '../../App';
import { FiDownload } from "react-icons/fi";
import DownloadKitPup from './DownloadKitPup';
const Download = () => {
  const { download } = useContext(MyContext);
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="md:p-10 my-10 relative border-2" ref={download}>
      <div className="flex flex-col   items-center gap-4 justify-center">
        <p className="text-lg font-semibold md:font-bold  text-nowrap uppercase">
          Download
        </p>
        <p className=''>Know more about where your future lies. Download the product kit now.</p>
        <div className='flex items-center mb-10 text-lg cursor-pointer gap-2 font-semibold' onClick={()=>{
          setIsOpen(true)
        }}>
        <FiDownload className='text-blue-800'/>
        <p>Product Kit</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-10">
          <p className="text-sm text-center">
            RERA No: P52100051200, http://maharera.mahaonline.gov.in
          </p>
          <img src={ReraQr} alt="rera-qr" className="w-52 " />
        </div>
      </div>
      </div>
     
  {isOpen?<DownloadKitPup setIsOpen={setIsOpen}/>:null}
    </div>
  );
};

export default Download;
