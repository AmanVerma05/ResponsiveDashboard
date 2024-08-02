import React from "react";
import img from "../assets/images/icons/basket.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import goals from "../assets/images/icons/goal.png";
import dish from "../assets/images/icons/dish.png";
import menus from "../assets/images/icons/menuLogo.png";

const data = [
  {
    logo: goals,
    title: "Goals",
    img: img,
  },
  {
    logo: dish,
    title: "Popular Dishes",
    img: img,
  },
  {
    logo: menus,
    title: "Menus",
    img: img,
  },
];
const Options = () => {
  return (
    <div className="flex flex-col bg-[#292b40] rounded-lg h-auto w-full py-3 px-3 gap-[17px] text-white">
      {data.map((datas) => {
        return (
          <div className="flex items-center gap-4 hover:bg-slate-600 rounded-full px-1">
            <img
              alt="image"
              className="h-20 w-20 rounded-full fill"
              src={datas.logo}
            />
            <h3 className="w-full text-xl font-semibold">{datas.title}</h3>
            <IoIosArrowDroprightCircle color="grey" size={40} />
          </div>
        );
      })}
    </div>
  );
};

export default Options;
