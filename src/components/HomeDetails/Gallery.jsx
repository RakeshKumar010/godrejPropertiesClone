import ReraQr from '../../assets/image/reraqr.jpg'

const Gallery = () => {
  return (
    <div className="md:p-10 my-10 ">
      <div className="flex gap-4 justify-center">
        <p className="text-lg  font-semibold md:font-bold  text-nowrap uppercase">
          GALLERY
        </p>
      </div>
      <div className='flex flex-col items-center'>
        <button className='md:py-3 py-2 md:my-32 my-20 text-sm tracking-[1px] md:px-14 px-5  border-[1px] border-black '>VIEW GALLERY</button>
        <div className='flex flex-col items-center gap-10'>
            <p className='text-sm text-center'>RERA No: P52100051200, http://maharera.mahaonline.gov.in</p>
            <img src={ReraQr} alt="rera-qr" className='w-52 '/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
