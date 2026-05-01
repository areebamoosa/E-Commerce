"use client";

import Link from "next/link";
import type { SidebarProps } from "@/types";

const SideBar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-2xl transform transition-transform duration-500 z-50 p-6 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center">
            <button className="cursor-pointer" onClick={onClose}>
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            <div className="text-black flex gap-4 ">
              <div className="flex justify-center items-center gap-1 text-xl">
                <p className="font ">us</p>
                <i className="fa-solid fa-dollar-sign text-xl"></i>
              </div>

              <p>
                <Link href="/login">
                  <i className="fa-solid fa-user text-xl"></i>
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-30 flex flex-col justify-start items-start">
            <ul className="flex flex-col font-semibold font cursor-pointer text-black text-xl gap-15">
              <li>
                <Link
                  href="/cosmetics"
                  className="light-pink-hover  hover:rounded-md transition-all duration-300 px-4 py-2 "
                >
                  cosmetics{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/fragrance"
                  className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
                >
                  fragrance
                </Link>
              </li>
              <li>
                <Link
                  href="/skin"
                  className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
                >
                  {" "}
                  skin
                </Link>
              </li>
              <li>
                <Link
                  href="/discover"
                  className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
                >
                  {" "}
                  discover
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
                >
                  About Us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
