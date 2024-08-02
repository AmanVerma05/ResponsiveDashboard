import React, { useState } from "react";
import { FaBars, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import userImg from "../assets/images/profile/amanprofile.jpg";
import { IoLogoXbox } from "react-icons/io";
import useStore from "../useStore";

const Navbar = () => {
  const setCheckButton = useStore((state) => state.setCheckButton);
  const [checkValue, setCheckValue] = useState(false);

  const toggleSwitch = () => {
    setCheckValue(!checkValue);
    setCheckButton(checkValue);
  };

  return (
    <div className="p-2 flex bg-[#313452] text-stone-50 h-12 w-auto top-0 sticky z-20">
      <div className="relative m-1 ">
        <IoLogoXbox size={30} />
      </div>

      <div className="pl-5 justify-between flex w-full ">
        {/* search bar */}
        <div class="">
          <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-[#5d6a85] overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer bg-[#5d6a85] h-full w-full outline-none text-sm text-white pr-2"
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
        {/* logos */}
        <div className="hidden lg:flex md:flex gap-2 relative">
          <div className="flex rounded-full h-7 w-7 bg-zinc-500 items-center justify-center">
            {" "}
            <FaRegEnvelope />
          </div>
          <div className="flex rounded-full h-7 w-7 bg-zinc-500 items-center justify-center">
            {" "}
            <MdOutlineSettings />
          </div>
          <div className="flex rounded-full h-7 w-7 bg-zinc-500 items-center justify-center">
            {" "}
            <VscBellDot />
          </div>
          <div className="flex rounded-full h-7 w-7 bg-zinc-500 items-center justify-center">
            {" "}
            <img className="rounded-full" src={userImg} alt="User Profile" />
          </div>
        </div>
        <div
          className="relative m-1 block lg:hidden md:hidden"
          onClick={toggleSwitch}
        >
          <FaBars size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
