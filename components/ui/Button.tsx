"use client";

type ButtonProps = {
  text: string;
  width?: string;
  height?: string;
};

const Button = ({ text, width = "w-32", height = "h-10" }: ButtonProps) => {
  return (
    <>
      {/* White Button with black on hover*/}

      <button
        className={`${width} ${height} font border border-black text-black bg-white font-light  px-5 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
