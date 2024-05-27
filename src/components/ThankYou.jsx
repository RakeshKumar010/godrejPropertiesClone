import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ThankuIcon from '../assets/image/thanks-icon.webp';

const ThankYou = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col md:gap-5 gap-2 items-center p-10 mt-20 min-h-screen text-center select-none'>
        <img src={ThankuIcon} alt="...." className='h-[100px] inline-block max-w-full'/>
        <p className='text-[2.5rem] font-semibold'>You're All Set!</p>
        <p className='text-xl text-center'>Greetings From Godrej Properties</p>
        <p className='md:text-center text-start'>Thanks you for expressing interest on our website. <br /> <span>
        Our expert will get in touch with you shortly.</span></p>
        <Link to={'/'} className='bg-[#54d680] rounded-sm hover:shadow-2xl text-white py-2 px-5 text-lg'>
            Back To Home
        </Link>
    </div>
  )
}

export default ThankYou;
