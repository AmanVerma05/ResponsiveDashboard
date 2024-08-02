import React from "react";
import ProgressRing from "./ProgressRing";
const Profit = () => {
  return (
    <div className=" flex flex-col lg:flex-row bg-[#292b40] rounded-2xl h-auto w-full p-2 text-white">
      <div className=" rounded-md w-full flex flex-col p-2 gap-4">
        <h3 className="text-lg font-semibold  text-gray-400">Net Profit</h3>
        <h1 className="text-6xl font-bold">$ 6759.25</h1>
        <p className="mt-2 text-2xl text-green-600 font-bold"> + 3%</p>
      </div>
      <div className="p-2">
        <ProgressRing percentage={70} />
      </div>
    </div>
  );
};

export default Profit;
