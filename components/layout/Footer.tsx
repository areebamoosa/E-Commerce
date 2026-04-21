"use client";
import TransButton from "../ui/TransButton";

const Footer = () => {
  return (
    <>
      <div className="mt-[120px] flex flex-col justify-center items-center m-10">
        <div className="text-black  flex flex-col gap-3 font">
          <h1 className="text-sm sm:text-lg lg:text-xl font-normal">
            sign up for updates:
          </h1>
          <div className="flex justify-center items-center gap-6">
            <input
              type="text"
              placeholder="email address"
              className="w-60 sm:w-110 lg:w-150 h-10 border p-4 rounded-sm border-black"
            />
            <TransButton
              text={"submit"}
              width="w-30 md:w-30  lg:w-40"
              height="h-10"
            />
          </div>

          <div className="flex gap-1 text-sm sm:text-lg">
            <p className="grey">by signing up you agree to our</p>
            <p className="grey underline cursor-pointer">terms</p>
          </div>
        </div>

        <div className="text-2xl sm:text-3xl flex gap-10 mt-20 cursor-pointer">
          <i
            className="fa-brands fa-facebook-f"
            style={{ color: "#986e75" }}
          ></i>
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#986e75" }}
          ></i>
          <i
            className="fa-brands fa-x-twitter"
            style={{ color: "#986e75" }}
          ></i>
          <i className="fa-brands fa-tiktok" style={{ color: "#986e75" }}></i>
        </div>

        <div className="flex gap-3 whitespace-nowrap  sm:gap-5 mt-10 sm:mt-20 text-xs sm:text-lg grey font">
          <p className="hover:underline cursor-pointer">contact us</p>
          <p className="hover:underline cursor-pointer">faq</p>
          <p className="hover:underline cursor-pointer">shipping</p>
          <p className="hover:underline cursor-pointer">order tracking</p>
          <p className="hover:underline cursor-pointer">rewards</p>
          <p className="hover:underline cursor-pointer">gift card balance</p>
        </div>

        <div className="flex gap-2 sm:gap-4 mt-10 sm:mt-15 text-xs sm:text-base grey whitespace-nowrap">
          <p className="underline cursor-pointer">privacy policy</p>
          <p className="underline cursor-pointer">terms</p>
          <p className="underline cursor-pointer">accessibility</p>
          <p className="underline cursor-pointer">set my cookie choices</p>
          <p className="underline cursor-pointer">cookie policy</p>
        </div>

        <div className="mt-8">
          <p className="dark-pink font-medium font text-sm sm:text-base lg:text-lg">
            Developed with{" "}
            <i
              className="fa-regular fa-heart "
              style={{ color: "#986e75" }}
            ></i>{" "}
            by A.M
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
