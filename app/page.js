"use client";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="min-w-[400px] h-full  mt-4 ml-4 p-2">
        <Image 
          src={'/logo.png'}
          width={100}
          height={100}
        />
        <p className="font-bold text-teal-500 text-center text-xl">Log in</p>
        <form className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="border p-2 mb-2 w-full"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="border p-2 mb-2 w-full"
          />
          <br />
          <button
            type="submit"
            className="mt-4 p-2 bg-teal-500 text-white rounded items-center justify-center"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Page;
