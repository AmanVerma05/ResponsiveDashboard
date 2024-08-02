import React from "react";
import Graph from "./Graph";

const Activity = () => {
  return (
    <div className="bg-[#292b40] flex flex-col rounded-md p-4 ">
      <div className="flex w-full justify-between mb-2">
        <h3 className="text-lg font-semibold">Activity</h3>
        <button className="bg-gray-600 text-sm font-semibold py-1 px-3 rounded-xl">
          Weekly
        </button>
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
};

export default Activity;
