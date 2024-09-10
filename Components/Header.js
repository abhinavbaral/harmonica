import React from 'react';


const Header = () => {
return(
    <>
      <div id="main" className='w-full h-full bg-[#333]  p-8 justify-between items-center border-b-2 border-[#444]  text-white flex'>
        <div id="first" className='bg-red-500 w-2/5'></div>
        <div id="last">
          <h3>Recommendation</h3>
          <div id="reco"></div>
        </div>
      </div>
    </>
)}

export default Header;