"use client";

type TransProps = {
  text: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

const TransButton = ({
  text,
  width = "w-32",
  height = "h-10",
  onClick,
}: TransProps) => {
  return (
    <>
      {/* Transparent Button with black on hover*/}
      <button
        onClick={onClick}
        className={`${width} ${height} bg-transparent font border border-black  font-light  px-5 py-2 rounded-md  cursor-pointer hover:bg-black hover:text-white`}
      >
        {text}
      </button>
    </>
  );
};

export default TransButton;
