import { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const EmiCalculator = () => {
  const [totalAmount,setTotalAmount]=useState(30000)
  const [adPay, setAdPay] = useState(20);
  const [duration, setDuration] = useState(25);
  const [intRate, setIntRate] = useState(7);
  const [emi, setEmi] = useState(0);
  useEffect(() => {
    const principal = totalAmount - (totalAmount * adPay / 100);
    const r = intRate / (12 * 100);
    const n = duration * 12;

    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setEmi(emi);
  }, [totalAmount, adPay, duration, intRate]);
  return (
    <div className="md:w-[520px] bg-[#fffefa] w-full rounded-md h-[500px] border-2 p-6">
      <p className="text-xl font-semibold">EMI CALCULATOR</p>
      <div className="">
        <p className="mt-5 mb-1">LOAN AMOUNT</p>
        <div className="flex justify-between items-center relative ">
          <input
            type="number"
      onChange={(e)=>{setTotalAmount(e.target.value)}}
            defaultValue={totalAmount}
            className="w-full  border-0  focus:ring-0  border-b-[1px] p-0 text-xl text-black font-semibold"
          />
          <FaIndianRupeeSign className="text-2xl text-gray-600 absolute right-0 bottom-2" />
        </div>
      </div>
      <div className="">
        <p className="mt-5 mb-1 text-[10px]">
          ADVANCE PAYMENT <b> {adPay}%</b>
        </p>
        <p className="text-end">{(30000 * adPay) / 100}</p>
        <input
          type="range"
          value={adPay}
          className="w-full accent-black  "
          onChange={(e) => {
            setAdPay(e.target.value);
          }}
        />
      </div>
      <div className="">
        <p className="mt-5 mb-1 text-[10px]">
          DURATION <b>{duration} Years</b>
        </p>
        <p className="text-end">{duration} Years</p>
        <input
          type="range"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          min={5}
          max={30}
          className="w-full accent-black  "
        />
      </div>
      <div className="">
        <p className="mt-5 mb-1 text-[10px]">INTEREST RATE <b>{intRate}%</b></p>
        <p className="text-end font-semibold">{intRate}%</p>
        <input
    
          type="range"
          value={intRate}
          onChange={(e) => {
            setIntRate(e.target.value);
          }}
          className="w-full accent-black  "
        />
      </div>
      
      <div>
        <p className="text-[10px] pt-10">ESTIMATED MONTHTLY EMI</p>
        <div className="flex gap-1 text-lg">
          <p className="font-semibold mt-1">{emi.toFixed(2)}</p>
          <p className="text-gray-600">₹/month</p>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
