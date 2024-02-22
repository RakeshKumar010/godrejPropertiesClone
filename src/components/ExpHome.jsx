import React, { useState, useEffect } from "react";
import ExpHomeCards from "./ExpHomeCards";
import Homes from "../data/Homes";
import Pagination from "./Pagination";

const ExpHome = () => {
  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    setPageNo(Math.ceil(Homes.length / 9));
    
  }, []);

  return (
    <div>
      <div className="flex gap-4 justify-center">
        <p className="text-lg font-semibold mb-5 text-nowrap">EXPLORE HOMES</p>
      </div>
      <div className=" mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Homes.map((value, index) => {
          return (
            <>
              {index < 9 ? <ExpHomeCards value={value} /> : null}
            </>
          );
        })}
      </div>

      <Pagination pageNo={pageNo} />
    </div>
  );
};

export default ExpHome;
