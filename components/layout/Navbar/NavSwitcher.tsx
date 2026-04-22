"use client";

import React, { useEffect, useState } from "react";

import MainNavbar from "./MainNavbar";

import Nav from "./Nav";

const NavbarSwitcher = () => {
  const [showMainNav, setShowMainNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggerHeight = 500;

      if (window.scrollY > scrollTriggerHeight) {
        setShowMainNav(true);
      } else {
        setShowMainNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{showMainNav ? <Nav /> : <MainNavbar />}</>;
};

export default NavbarSwitcher;
