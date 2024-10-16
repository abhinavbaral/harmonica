
"use client"

import React, { useState } from 'react';
import Pbody from '@/Components/Pbody';

const Page = () => {
  const [userName,setUserName] = useState("Abhinav")
  console.log(userName)

  return (
    <div >
    
      <button onClick={() => {
        setUserName("Animesh")
      }}>
       <h1 className="font-bold text-black">{userName}.</h1>
      </button>
      <Pbody />
    </div>
  );
};

export default Page;
