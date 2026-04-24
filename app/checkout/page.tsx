"use client";

import React, { useState } from "react";
import Image from "next/image";

import Nav from "@/components/layout/Navbar/Nav";
import { useCart } from "@/hooks/useCart";
import SideBar from "@/components/cart/Sidebar";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const CheckoutPage = () => {
  const { cart } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen mt-20 sm:mt-25">
        <div className="flex justify-center items-center min-h-[80vh] flex-col ">
          {/* Payment Methods */}

          <div className="mt-10">
            <div className="flex justify-center items-center">
              <p className="grey text-lg">express checkout</p>
            </div>

            <div className="flex gap-2 mt-5 ">
              <div className="w-[50px] sm:w-[100px] h-[50px] rounded-md">
                <Image
                  src="/assets/visa.svg"
                  alt="visa"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-md cursor-pointer"
                />
              </div>
              <div className="w-[50px] sm:w-[100px] h-[50px] rounded-md">
                <Image
                  src="/assets/amex.svg"
                  alt="amex"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-md cursor-pointer"
                />
              </div>
              <div className="w-[50px] sm:w-[100px] h-[50px] rounded-md">
                <Image
                  src="/assets/circle.svg"
                  alt="circle"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-md cursor-pointer"
                />
              </div>
            </div>
          </div>

          <CheckoutForm total={total} />
        </div>
      </div>

      {/* Cart Side Bar */}
      {isCartOpen && <SideBar onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default CheckoutPage;
