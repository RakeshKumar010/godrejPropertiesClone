import React, { useState } from "react";
import Homes from "../../data/Homes";
import ExpHomeCards from "../ExpHomeCards";

const YouMayLike = ({id}) => {
  const [sPage, setSPage] = useState(1+parseInt(id));
  const [ePage, setEPage] = useState(4+parseInt(id));
  return (
    <div className="m-5 md:m-16">
      <div className="mb-10">
        <div className="flex gap-4 justify-center">
          <p className="text-lg font-semibold text-nowrap">
            You May Also Like 
          </p>
        </div>
        <div className=" mt-6 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
          {Homes.slice(sPage, ePage).map((value, index) => {
            return <>{index < 9 ? <ExpHomeCards value={value} /> : null}</>;
          })}
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
