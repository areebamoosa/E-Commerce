"use client";

import React, { useState } from "react";

type FaqProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqProps) => {
  const [faq, setFaq] = useState(false);

  return (
    <>
      <div
        className="w-[400px] sm:w-[600px] lg:w-[1000px] overflow-hidden text-wrap cursor-pointer"
        onClick={() => setFaq(!faq)}
      >
        <div className="flex justify-between ">
          <h4 className="dark-pink font-semibold text-xs sm:text-base lg:text-lg">
            {question}
          </h4>
          <button className="dark-pink text-xs sm:text-base lg:text-3xl">
            {" "}
            {faq ? "-" : "+"}{" "}
          </button>
        </div>

        <div className={`${faq ? "block" : "hidden"}`}>
          <p className="grey font mt-3 text-xs sm:text-base lg:text-lg">
            {answer}
          </p>
        </div>
        <hr className="dark-pink mt-5" />
      </div>
    </>
  );
};

export default FaqCard;
