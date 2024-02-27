import React, { useContext, useState } from "react";
import { MyContext } from "../../App";

const Plan = ({ planimg, floorplan, unitplan }) => {
  const { plans } = useContext(MyContext);
  const [tabValue, setTabValue] = useState("master");
  return (
    <div className="md:m-10 m-3" ref={plans}>
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          PLANS
        </p>
      </div>
      <div>
        <div className="flex gap-10 justify-center underline-offset-8 cursor-pointer select-none">
          <p
            className={`text-[12px] md:text-lg font-semibold mb-5 text-nowrap   text-center ${
              tabValue == "master" ? "underline" : "text-gray-400"
            } `}
            onClick={() => {
              setTabValue("master");
            }}
          >
            Mater Plans
          </p>
          {floorplan.floorplan1 ? (
            <p
              className={`text-[12px] md:text-lg font-semibold mb-5 text-nowrap    text-center ${
                tabValue == "floor" ? "underline" : "text-gray-400"
              }`}
              onClick={() => {
                setTabValue("floor");
              }}
            >
              Floor Plans
            </p>
          ) : null}
          {unitplan.unitplan1 ? (
            <p
              className={`text-[12px] md:text-lg font-semibold mb-5 text-nowrap   text-center ${
                tabValue == "unit" ? "underline" : "text-gray-400"
              }`}
              onClick={() => {
                setTabValue("unit");
              }}
            >
              Unit Plans
            </p>
          ) : null}
        </div>
        {tabValue == "master" ? (
          <img
            src={planimg}
            alt="..."
            className="hover:border-2 hover:shadow-md "
          />
        ) : null}
        {tabValue == "floor" ? (
          <div className="flex md:justify-evenly md:flex-row flex-col ">
            {floorplan.floorplan1 ? (
              <img
                src={floorplan.floorplan1}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
            {floorplan.floorplan2 ? (
              <img
                src={floorplan.floorplan2}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
            {floorplan.floorplan3 ? (
              <img
                src={floorplan.floorplan3}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
          </div>
        ) : null}

        {tabValue == "unit" ? (
          <div className="flex md:justify-evenly md:flex-row flex-col ">
            {unitplan.unitplan1 ? (
              <img
                src={unitplan.unitplan1}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
            {unitplan.unitplan2 ? (
              <img
                src={unitplan.unitplan2}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
            {unitplan.unitplan3 ? (
              <img
                src={unitplan.unitplan3}
                alt="..."
                className="hover:border-2 hover:shadow-md md:w-[20vw] w-full"
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Plan;
