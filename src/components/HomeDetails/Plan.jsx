import React, { useContext } from "react";
import { MyContext } from "../../App";

const Plan = ({planimg}) => {
  const {plans}=useContext(MyContext)
  return (
    <div className="md:m-10 m-3" ref={plans}>
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          PLANS
        </p>
      </div>
      <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase underline text-center">
        MASTER PLANS
      </p>
      <img
        src={planimg}
        alt="..."
        className="hover:border-2 hover:shadow-md"
      />
    </div>
  );
};

export default Plan;
