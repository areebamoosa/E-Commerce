"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import NavSidebar from "./NavSidebar";
import { useSearch } from "@/context/SearchContext";


import dynamic from "next/dynamic";



const SideBar = dynamic(() => import("@/components/cart/Sidebar"), {
  ssr: false,
});

const Search = dynamic(() => import("@/components/search/Search"), {
  ssr: false,
});

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { searchItem, setSearchItem } = useSearch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-2 bg-white">
        <div className="text-white flex justify-between items-center mt-6 text-2xl ">
          <div className="text-black hidden sm:flex justify-center items-center gap-2 sm:ml-6 lg:ml-10">
            <p className="font">us</p>
            <i className="fa-solid fa-dollar-sign"></i>
          </div>

          <button onClick={() => setSidebar(true)} className="ml-2 sm:hidden">
            <i className="fa-solid fa-bars text-black"></i>
          </button>

          <h1 className="headFont dark-pink cursor-pointer ml-10 sm:text-2xl lg:text-3xl sm:ml-25 lg:ml-50">
            <Link href="/">
              <span className="inline-block animate-door-rotate">H</span>ER
              COSMETICS{" "}
            </Link>
          </h1>

          <div className="text-black flex gap-4 mr-2 justify-center items-center sm:gap-8 lg:gap-12 sm:text-lg lg:text-2xl sm:mr-4 lg:mr-10 ">
            <p className="hidden sm:block">
              <i className="fa-solid fa-heart"></i>
            </p>
            <p className="hidden sm:block">
              <Link href="/login">
                <i className="fa-solid fa-user"></i>
              </Link>
            </p>
            <div className="relative">
              <button onClick={() => setOpen(true)} className="cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
              </button>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <i className="fa-solid fa-bag-shopping"></i>{" "}
            </button>
          </div>
        </div>

        <div className="text-black flex justify-center items-center mt-8 mb-2">
          <ul className="hidden sm:flex justify-center items-center font cursor-pointer sm:gap-1 lg:gap-10">
            <li>
              <Link
                href="/cosmetics"
                className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
              >
                cosmetics{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/fragrance"
                className="light-pink-hover  hover:rounded-md transition-all duration-300  px-4 py-2 "
              >
                {" "}
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

      {/* Search Dropdown */}

      {open && (
        <div className="fixed top-0 left-0 w-full min-h-screen bg-white z-40 flex flex-col items-center overflow-y-auto pb-10">
          <Nav />

          <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-10 mt-40">
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass font-light absolute left-4 top-1/2 -translate-y-1/2 text-base sm:text-lg"></i>

              <input
                ref={inputRef}
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className=" w-[220px] sm:w-[330px] md:w-[450px] lg:w-[600px] xl:w-[900px] h-[42px] border border-black rounded-md pl-10 pr-4 text-base sm:text-lg outline-none"
                placeholder="Search..."
              />
            </div>

            <button onClick={() => setOpen(false)} className="cursor-pointer">
              <i className="fa-solid fa-xmark text-2xl sm:text-3xl text-black"></i>
            </button>
          </div>

          <div className="w-full mt-10 px-10">
            <Search />
          </div>
        </div>
      )}

      {/* Cart Side Bar */}
      {isCartOpen && <SideBar onClose={() => setIsCartOpen(false)} />}

      {/* Side NavBar for cellphones */}
      {isSidebarOpen && (
        <NavSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;
