import React, { useContext } from "react";
import Homes from "../../data/Homes";
import ExpHomeCards from "../ExpHomeCards";
import { MyContext } from "../../App";

const YouMayLike = ({id}) => {
  
  const sPage=1+parseInt(id)
  const ePage=4+parseInt(id)
  const {alsolike}=useContext(MyContext)
 const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
  return (
    <div className="m-5 md:m-16" ref={alsolike}>
      <div className="mb-10">
        <div className="flex gap-4 justify-center">
          <p className="text-lg font-semibold text-nowrap">
            You May Also Like 
          </p>
        </div>
        <div className=" mt-6 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3" onClick={scrollToTop}>
          {Homes.slice(sPage, ePage).map((value, index) => {
            return <>{index < 9 ? <ExpHomeCards value={value} /> : null}</>;
          })}
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
