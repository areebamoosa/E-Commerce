"use client";

import { useState } from "react";
import Image from "next/image";

// import CartSideBar from "./CartSideBar";
// import { useCart } from "./CartContext";
// import Nav from "../Navbar/Nav";

export default function CheckoutForm() {
  //   const { cart } = useCart();
  //   const [isCartOpen, setIsCartOpen] = useState(false);

  //   const total = cart.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );

  return (
    <>
      {/* <Nav /> */}

      <div className="bg-white min-h-screen mt-20 sm:mt-25">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* EXPRESS CHECKOUT */}
          <div className="mt-10">
            <div className="flex justify-center">
              <p className="grey text-lg">express checkout</p>
            </div>

            <div className="flex gap-2 mt-5">
              <Image
                src="/visa.svg"
                alt="visa"
                fill
                className="w-[50px] sm:w-[100px]"
              />
              <Image
                src="/amex.svg"
                alt="amex"
                fill
                className="w-[50px] sm:w-[100px]"
              />
              <Image
                src="/circle.svg"
                alt="circle"
                fill
                className="w-[50px] sm:w-[100px]"
              />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-3 mt-5 grey">
            <hr className="w-30 sm:w-60 border" />
            <p>or</p>
            <hr className="w-30 sm:w-60 border" />
          </div>

          {/* FORM WRAPPER */}
          <div className="w-[400px] sm:w-[700px] p-6 flex flex-col">
            {/* CONTACT */}
            <div className="flex justify-between mt-10 mb-4">
              <h1 className="text-base sm:text-2xl font-semibold font">
                CONTACT
              </h1>
              <p className="underline grey text-xs sm:text-sm cursor-pointer">
                Sign in
              </p>
            </div>

            <input
              type="text"
              placeholder="email"
              className="w-full h-[50px] border p-4 rounded-md"
            />

            <div className="flex items-center gap-2 mt-5">
              <input type="checkbox" />
              <p className="text-xs sm:text-sm">
                email me with news and offers
              </p>
            </div>

            {/* DELIVERY */}
            <div className="mt-10">
              <h1 className="text-base sm:text-2xl font-semibold font">
                DELIVERY
              </h1>

              <select className="w-full h-[50px] border mt-5 p-4 rounded-md">
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>

              <div className="flex gap-2 mt-4">
                <input
                  placeholder="first name"
                  className="w-1/2 h-[50px] border p-4 rounded-md"
                />
                <input
                  placeholder="last name"
                  className="w-1/2 h-[50px] border p-4 rounded-md"
                />
              </div>

              <input
                placeholder="address"
                className="w-full h-[50px] border mt-4 p-4 rounded-md"
              />
            </div>

            {/* PAYMENT */}
            <div className="mt-10">
              <h1 className="text-base sm:text-2xl font-semibold font">
                PAYMENT
              </h1>

              <p className="grey text-sm mt-3">
                All transactions are secure and encrypted.
              </p>
            </div>

            {/* TOTAL */}
            <div className="flex justify-between mt-10 font-semibold">
              <p>Total</p>
              {/* <p>${total.toFixed(2)}</p> */}
            </div>

            <button className="mt-5 w-full bg-black text-white py-3 rounded-md">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* CART SIDEBAR */}
      {/* {isCartOpen && (
        <CartSideBar onClose={() => setIsCartOpen(false)} />
      )} */}
    </>
  );
}
