import React from "react";
import basket from "../assets/images/icons/basket.png";
import doneOrder from "../assets/images/icons/doneOrders.png";
import cancelOrder from "../assets/images/icons/cancelOrder.png";
import revenue from "../assets/images/icons/revenue.png";
const data = [
  {
    icons: basket,
    title: "Total Orders",
    quantity: "75",
    percentage: "3%",
    sign: "positive",
  },
  {
    icons: doneOrder,
    title: "Total Delivered",
    quantity: "70",
    percentage: "3%",
    sign: "negative",
  },
  {
    icons: cancelOrder,
    title: "Total Cancelled",
    quantity: "05",
    percentage: "3%",
    sign: "positive",
  },
  {
    icons: revenue,
    title: "Total Revenue",
    quantity: "$2k",
    percentage: "3%",
    sign: "negative",
  },
];
const Section1 = () => {
  return (
    <div className=" flex flex-wrap lg:flex-row gap-2 md:flex-row  justify-between ">
      {data.map((datas) => {
        return (
          <div className="flex flex-col gap-2 text-white h-48 w-96 md:w-auto lg:w-48 rounded-xl hover:bg-[#dbdf57] hover:text-black bg-[#292b40] p-6 ">
            <img className="h-20 w-20" src={datas.icons} />
            <p className="text-sm font-semibold">{datas.title}</p>
            <div className="flex justify-between ">
              <p className="text-4xl font-bold">{datas.quantity}</p>
              {datas.sign === "positive" ? (
                <p className="mt-2 text-2xl text-green-600 font-semibold">
                  {"+ " + datas.percentage}
                </p>
              ) : (
                <p className="mt-2 text-2xl text-red-600 font-semibold">
                  {"- " + datas.percentage}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section1;
