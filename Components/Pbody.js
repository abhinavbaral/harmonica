 import React from 'react'
 import 'remixicon/fonts/remixicon.css';

 
 const Pbody = () => {
   return (
     <div  className="border p-2 mb-2 w-full h-full" >
        <div className='flex items-center gap-3 '>
        <div className='border  min-w-[300px] px-3 py-2 rounded-md'>
            <div className='text-teal-500 font-semibold' >  Playliist
    <i class="ri-add-circle-line" className='text-teal-500 text-4xl'></i>
             </div>
             <br/>
        </div>
        <div className='border flex-1 px-3 py-2 rounded-md'>
            All Songs
            <div className='top-0 right-0 relative'> 
            <button className='rounded'>
            <i class="ri-add-circle-line " className='text-teal-500 text-4xl'></i>
                Add song</button>
            <i class="ri-menu-fill" className='text-teal-500 text-4xl ' ></i>
            </div>
            </div>
        </div>
        <i class="ri-play-reverse-fill"></i>
            <i class="ri-play-circle-fill"></i>
            <i class="ri-play-fill"></i>
     </div>
   )
 }
 
 export default Pbody;
