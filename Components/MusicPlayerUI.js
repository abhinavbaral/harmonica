
import Navbar from "./Navbar";
import Playlist from "./Playlist";
import Home from "./Home";
import Musicplay from "./Musicplay";
import React from 'react'

const MusicPlayerUi = () => {
  return (
    <div className="w-full h-full flex flex-col border-5 border-teal-500">
    <div className=' w-full border  border-red-500 '>
     <Navbar />
   </div>
   <div style={{ display: "flex", gap: "2px", flex: 1 }}>
     <Playlist />
     <Home />
   </div>
   <div>
     <Musicplay />
   </div>
 </div>
  )
}

export default MusicPlayerUi
