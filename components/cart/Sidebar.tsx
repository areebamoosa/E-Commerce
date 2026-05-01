"use client";

import { useCart } from "@/hooks/useCart";

import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/useToast";

type CartSidebar = {
  onClose: () => void;
};

const SideBar = ({ onClose }: CartSidebar) => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  const { addToast } = useToast();

  // Total price of all items in the cart
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className="fixed top-0 right-0 h-full w-[400px] sm:w-[600px] bg-white shadow-2xl transform translate-x-0 transition-transform duration-500 z-50 p-10  ">
        <div className="flex flex-col h-full overflow-y-scroll">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">cart</span>
            <button className="cursor-pointer" onClick={onClose}>
              <i className="fa-solid fa-xmark text-3xl text-black"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto mb-40">
            <div className="flex justify-center items-center mt-5">
              <p className="grey text-base sm:text-lg">
                your order qualifies for free shipping
              </p>
            </div>
            <hr className="border-t border-black my-4" />

            <div className="flex rounded-lg p-5 light-pink justify-start items-start w-80 sm:w-130 h-35 gap-5">
              <div className="sm:w-25 sm:h-25  rounded-md">
                <Image
                  src="/assets/cart.avif"
                  alt="cartImg"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <span className="sm:text-lg text-sm font-medium">
                  new! 12 days of her's advent calender 🎁
                </span>
                <p className="grey text-sm lg:text-md">
                  limited edition & online exclusive
                </p>
                <span className="text-sm sm:text-lg font-medium underline hover:text-white cursor-pointer">
                  shop now
                </span>
              </div>
            </div>

            <div className="mt-6 sm:mt-10">
              <div>
                {cart.length === 0 ? (
                  <>
                    <div className="flex justify-center items-center">
                      <p className="text-lg font-medium">Your cart is empty</p>
                    </div>
                    <p className="grey text-lg mt-5">recommended products</p>

                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <div className="flex flex-col justify-center items-center w-40  border border-col rounded-md gap-2 ">
                        <div className="w-40  h-32 rounded-md ">
                          <Image
                            src="/assets/pd5.webp"
                            alt="recommended product"
                            className="w-full h-full object-cover rounded-md"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white  px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center w-40  border border-col rounded-md gap-2 ">
                        <div className="w-40  h-32 rounded-md ">
                          <Image
                            src="/assets/pd12h.webp"
                            alt="recommended product"
                            className="w-full h-full object-cover rounded-md"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center w-40  border border-col rounded-md gap-2 ">
                        <div className="w-40  h-32 rounded-md ">
                          <Image
                            src="/assets/pd8s-3.webp"
                            alt="recommended product"
                            className="w-full h-full object-cover rounded-md"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="p-3 rounded-md ">
                          <p className="font-semibold">bare</p>
                          <p className="text-sm text-gray-600">38 shades</p>
                          <button className="bg-black text-white px-3 py-2 w-full rounded-md cursor-pointer mt-2">
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="border border-col p-2 rounded-md"
                      >
                        <div className="flex gap-3">
                          <div className="w-30 h-30 rounded-md">
                            <Image
                              src={item.Img}
                              alt="itemImg"
                              className="w-full h-full object-cover rounded-md"
                              width={40}
                              height={40}
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start ">
                              <div>
                                <p className="font-semibold mt-1 text-xs lg:text-base whitespace-nowrap">
                                  {item.title} - ${item.price}
                                </p>
                                <p className="text-xs  sm:text-sm text-gray-600 mt-2">
                                  {item.desc}
                                </p>
                              </div>
                              <button
                                className="underline grey cursor-pointer mr-1 sm:mr-3 mt-1 text-sm"
                                onClick={() => {
                                  removeFromCart(item.id);
                                  addToast(
                                    "Item removed from cart 🗑️",
                                    "error"
                                  );
                                }}
                              >
                                <i className="fa-solid fa-trash"></i> Remove
                              </button>
                            </div>

                            <div className="self-end mt-3">
                              <div className="sm:px-4 px-1 py-1 border border-black rounded-md w-25 sm:w-28 h-10 flex justify-around items-center">
                                <button
                                  className="cursor-pointer"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                  className="cursor-pointer"
                                  onClick={() => addToCart(item)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 mb-10 ">
              <span className="text-sm sm:text-xl font-semibold ">
                1 free mini deluxe sample with any $40+ order
              </span>
              <p className="grey text-sm sm:text-md mt-5">
                choose free samples
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-center items-center mt-5">
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md">
                  <div className="w-25 h-25">
                    <Image
                      src="/assets/free2.avif"
                      alt="free1"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">
                    {" "}
                    lip glaze deluxe
                  </p>
                </div>
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md">
                  <div className="w-25 h-25">
                    <Image
                      src="/assets/free3.avif"
                      alt="free1"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">brown kylash</p>
                </div>
                <div className="border border-col w-35 h-35 flex flex-col justify-center items-center rounded-md">
                  <div className="w-25 h-25">
                    <Image
                      src="/assets/free4.avif"
                      alt="free1"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">lash kylie</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 p-5 w-full h-40 flex flex-col gap-2 bg-white">
            <div className="flex text-base sm:text-xl font-semibold justify-between items-center font">
              <p>estimated total</p>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="grey">shipping & discounts calculated at checkout</p>
            <Link href="/checkout">
              <button className="bg-black text-white  sm:px-5 py-2 w-90 sm:w-140 rounded-md cursor-pointer">
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
