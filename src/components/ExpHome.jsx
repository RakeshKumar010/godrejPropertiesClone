import React, { useState, useEffect } from "react";
import ExpHomeCards from "./ExpHomeCards";
import Homes from "../data/Homes";
import Pagination from "./Pagination";

const ExpHome = () => {
  const [pageNo, setPageNo] = useState(0);
  const [sPage,setSPage]=useState(0)
  const[ePage,setEPage]=useState(9)
  const totalItem =Homes.length;
  

  useEffect(() => {
    setPageNo(Math.ceil(totalItem / 9));
    
  }, []);

  return (
    <div>
      <div className="flex gap-4 justify-center">
        <p className="text-lg font-semibold mb-5 text-nowrap">EXPLORE HOMES</p>
      </div>
      <div className=" mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Homes.slice(sPage,ePage).map((value, index) => {
          return (
            <>
              {index < 9 ? <ExpHomeCards value={value} /> : null}
            </>
          );
        })}
      </div>
      {sPage}
      {ePage}
      {pageNo}
      {totalItem}

      <Pagination pageNo={pageNo} totalItem={totalItem} setSPage={setSPage} sPage={sPage} ePage={ePage} setEPage={setEPage}/>
    </div>
  );
};

export default ExpHome;
