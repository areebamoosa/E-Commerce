"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center mt-60 sm:mt-75 lg:mt-60">
      <h1 className="headFont dark-pink text-2xl sm:text-3xl">
        CREATE AN ACCOUNT
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-48 sm:w-60 h-10 bg-white grey p-6 rounded-sm mt-10 font"
        />

        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-48 sm:w-60 h-10 bg-white grey p-6 rounded-sm mt-10 font"
        />
      </div>

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-100 sm:w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font"
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-100 sm:w-120 h-10 bg-white grey p-6 rounded-sm mt-5 font"
      />

      <div className="flex items-start text-left leading-tight mt-8 gap-2 justify-center">
        <input
          type="checkbox"
          className="w-4 h-4 sm:w-6 sm:h-6 rounded-md border-2 border-black cursor-pointer"
        />

        <div className="flex gap-1 text-xs sm:text-base">
          <p className="grey">
            please agree to our{" "}
            <span className="underline cursor-pointer">
              terms, privacy policy,
            </span>{" "}
            to create an account
          </p>
        </div>
      </div>

      <button className="w-80 sm:w-120 h-10 p-2 border-1 rounded-sm border-black mt-8 cursor-pointer grey">
        create account
      </button>

      <p className="mt-10 grey text-sm sm:text-base">
        already have an account?
      </p>

      <p className="cursor-pointer underline grey text-sm sm:text-base mt-1">
        <Link href="/login">login</Link>
      </p>
    </div>
  );
}
