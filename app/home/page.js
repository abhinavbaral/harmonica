"use client";
import React, { useState } from 'react';


const Page = () => {
  const [name, setName] = useState("User");

  const uname= () => {
    setName("getdatafromdb");
  };

  return (
    <>
      <h1 className="font-bold text-black">{name}.</h1>
      <button 
        onClick={uname} 
        className="mt-4 p-2 bg-teal-500 text-white rounded">
        Log in
      </button>
    </>
  );
};

export default Page;