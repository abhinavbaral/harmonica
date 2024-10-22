import React from 'react'
import 'remixicon/fonts/remixicon.css';

const Home = () => {
  return (
    <div className=' border border-b-rose-500  flex-1 rounded px-3 py-2'>
        
            All Songs
            <div className='top-0 right-0 relative'> 
            <button className='rounded'>
            <i class="ri-add-circle-line " className='text-teal-500 text-4xl'></i>
                Add song</button>
            <i class="ri-menu-fill" className='text-teal-500 text-4xl ' ></i>
            </div>
            </div>
  )
}

export default Home