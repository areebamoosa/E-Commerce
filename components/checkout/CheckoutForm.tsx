"use client";

import Image from "next/image";

type CheckoutFormProps = {
  total: number;
};

const CheckoutForm = ({ total }: CheckoutFormProps) => {
  return (
    <>
      <div className="flex justify-center items-center grey mt-5 gap-3">
        <hr className="sm:w-60 w-30 border border-col" />
        <p className="grey">or</p>
        <hr className="sm:w-60 w-30 border border-col" />
      </div>

      <div className="sm:w-[700px] w-[400px] p-6 flex-col ">
        <div className="flex gap-55 sm:gap-110 mb-4 mt-10">
          <h1 className="text-base sm:text-2xl font-semibold font">CONTACT</h1>
          <p className="underline cursor-pointer grey text-xs whitespace-nowrap sm:text-sm">
            Sign in
          </p>
        </div>

        <input
          type="text"
          placeholder="email"
          className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col"
        />

        <div className="flex gap-1 sm:gap-3 mt-5 ml-1">
          <input type="checkbox" className="border border-col w-3 sm:w-5" />
          <p className=" text-xs sm:text-sm">email me with news and offers</p>
        </div>

        <div className="mt-10">
          <h1 className="text-base sm:text-2xl font-semibold font">DELIVERY</h1>

          <div className="flex flex-col gap-4">
            <select className="p-4 border border-col  sm:w-[600px] w-[350px] h-[50px] rounded-md mt-5 grey">
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
            </select>

            <div className="flex gap-2 ">
              <input
                type="text"
                placeholder="first name"
                className="sm:w-[295px] w-[170px] h-[50px] border border-col rounded-md grey p-4"
              />
              <input
                type="text"
                placeholder="last name"
                className="sm:w-[295px] w-[170px] h-[50px] border border-col rounded-md grey p-4"
              />
            </div>

            <input
              type="text"
              placeholder="address"
              className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col "
            />
            <input
              type="text"
              placeholder="apartment,suite,etc.(optional)"
              className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col "
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="city"
                className="sm:w-[192px] w-[107px] h-[50px] p-4  border border-col rounded-md"
              />
              <input
                type="text"
                placeholder="state"
                className="sm:w-[192px] w-[107px] h-[50px] p-4  border border-col rounded-md"
              />
              <input
                type="tel"
                placeholder="zipcode"
                className="sm:w-[192px] w-[107px] h-[50px] p-4  border border-col rounded-md"
              />
            </div>

            <input
              type="tel"
              placeholder="phone"
              className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col "
            />
          </div>

          <div className="flex gap-3 mt-3">
            <input type="checkbox" className="border border-col w-5" />
            <p className="sm:text-sm text-xs">
              use shipping address as billing address
            </p>
          </div>
        </div>

        <div className="mt-10 ">
          <h1 className="text-base sm:text-2xl font-semibold font">PAYMENT</h1>
          <p className="grey mt-3 text-xs sm:text-sm">
            All transactions are secure and encrypted.
          </p>

          <div className="border border-col rounded-md mt-5 ">
            <div className="flex justify-between p-4">
              <p>credit card</p>
              <div className="flex gap-2 cursor-pointer">
                <Image src="/assets/visa.svg" alt="visa" width={40} height={40} />
                <Image src="/assets/amex.svg" alt="visa" width={40} height={40} />
                <Image src="/assets/circle.svg" alt="visa" width={40} height={40} />
              </div>
            </div>

            <div className="grey-bg  flex justify-center items-center flex-col p-2">
              <input
                type="password"
                placeholder="card number"
                className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white"
              />

              <div className="flex gap-2">
                <input
                  type="date"
                  placeholder="expiration date(mm / yy)"
                  className="sm:w-[295px] w-[170px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white"
                />
                <input
                  type="password"
                  placeholder="secret code"
                  className="sm:w-[295px] w-[170px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white"
                />
              </div>

              <input
                type="text"
                placeholder="name on card"
                className="sm:w-[600px] w-[350px] h-[50px] border p-4 rounded-md border-col mt-3 bg-white mb-2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 mt-3">
            <input type="checkbox" className="border border-col w-3 sm:w-5" />
            <p className="text-xs sm:text-sm">
              by placing this order, i agree to the{" "}
              <span className="underline grey mr-1">terms</span>&{" "}
              <span className="underline grey">privacy policy</span>{" "}
            </p>
          </div>
        </div>
        <div className="mt-10 p-2">
          <div className="flex justify-between text-base sm:text-xl font-semibold  ">
            <p className="ml-1">total</p>
            <span className="sm:mr-5 mr-[-3px]">${total.toFixed(2)}</span>
          </div>

          <div>
            <button className="mt-5 w-[350px] sm:w-[600px] bg-black text-white py-3 rounded-md  cursor-pointer">
              {" "}
              pay now{" "}
            </button>
          </div>
        </div>

        <div className="grey mt-5 text-xs sm:text-sm ">
          <p>
            your info will be saved to a Shop account. By continuing, you agree
            to Shop&apos;s <span className="underline">terms of service</span>
          </p>
          <p className="hidden sm:block">
            and acknowledge the{" "}
            <span className="underline">privacy policy</span>.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CheckoutForm;
