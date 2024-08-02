import React from "react";
import Section1 from "./Section1";
import Activity from "./Activity";
import OrderTable from "./OrderTable";
import Profit from "./Profit";
import Options from "./OPtions";
import Feedback from "./Feedback";

const Content = () => {
  return (
    <div className="flex flex-col text-white relative lg:ml-20 md:ml-20 ml-10 mr-10 my-5 ">
      <h1 className="font-semibold text-3xl">Dashboard</h1>

      <div className="flex flex-col lg:flex-row gap-10 mt-5 ">
        {/* part1 */}
        <div className=" h-full lg:w-[60%] flex-col flex gap-5 w-full">
          <Section1 />
          <Activity />
          <OrderTable />
        </div>

        {/* part2 */}
        <div className=" h-full lg:w-[40%] gap-5 flex flex-col w-full">
          <Profit />
          <Options />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Content;
