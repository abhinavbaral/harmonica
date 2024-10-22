import React from 'react'
import 'remixicon/fonts/remixicon.css';

const Playlist = () => {
  return (
    <div className='w-[200px] border border-blue-500'>
      <div  className="border p-2 mb-2 w-full h-full" >
        <div className='flex items-center gap-3 '>
        <div className='border  min-w-[300px] px-3 py-2 rounded-md'>
            <div className='text-teal-500 font-semibold' >  Playlist
    <i class="ri-add-circle-line" className='text-teal-500 text-4xl'></i>
             </div>
             <br/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Playlist