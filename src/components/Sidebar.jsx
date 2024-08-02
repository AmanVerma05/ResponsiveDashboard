import React from "react";
import { MdHome } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import useStore from "../useStore";
const Sidebar = () => {
  const checkButton = useStore((state) => state.checkButton);

  return (
    <>
      <div>
        <div className="hidden bg-[#313452] text-stone-50 h-screen w-auto fixed px-4 py-6 lg:block md:block">
          <ul className="space-y-6">
            <li>
              <MdHome size={25} color="#6E8DEA" />
            </li>
            <li>
              <BsClipboardData size={25} color="grey" />
            </li>
            <li>
              <TbChecklist size={25} color="grey" />
            </li>
            <li>
              <CiWallet size={25} color="grey" />
            </li>
            <li>
              <IoBagCheckOutline size={25} color="grey" />
            </li>
          </ul>
        </div>

        {checkButton === true ? (
          <div
            className="
        duration-500 transition-all bg-[#313452] text-stone-50 h-screen w-full fixed px-4 py-6 z-50"
          >
            <ul className="space-y-6 w-full items-center">
              <li className="flex h-12 items-center gap-2 justify-center hover:bg-white hover:text-black">
                <MdHome size={25} color="grey" />
                HOME
              </li>
              <li className="flex h-12 items-center gap-2 justify-center hover:bg-white hover:text-black">
                <BsClipboardData size={25} color="grey" />
                DATA ANALYS
              </li>
              <li className="flex h-12 items-center gap-2 justify-center hover:bg-white hover:text-black">
                <TbChecklist size={25} color="grey" />
                CHECKLIST
              </li>
              <li className="flex h-12 items-center gap-2 justify-center hover:bg-white hover:text-black">
                <CiWallet size={25} color="grey" />
                WALLET
              </li>
              <li className="flex h-12 items-center gap-2 justify-center hover:bg-white hover:text-black">
                <IoBagCheckOutline size={25} color="grey" />
                SHOP
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
