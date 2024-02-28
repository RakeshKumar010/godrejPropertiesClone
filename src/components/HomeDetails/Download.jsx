import { useContext } from 'react';
import ReraQr from '../../assets/image/reraqr.jpg'
import { MyContext } from '../../App';

const Download = () => {
  const { download } = useContext(MyContext);
  return (
    <div className="md:p-10 my-10 " ref={download}>
      <div className="flex gap-4 justify-center">
        <p className="text-lg py-10 font-semibold md:font-bold  text-nowrap uppercase">
          Download
        </p>
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
  );
};

export default Download;
