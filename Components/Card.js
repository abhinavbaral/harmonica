import React from 'react'

const Card = () => {
  return (
  
    
const Card = ({ title, desc }) => {
    return (
      <div className='border h-[200px] w-[200px] flex justify-center items-center text-center border-blue-950 '>
          <h2>{title}</h2>
        <h5>{desc}</h5>
      </div>
  )
}

export default Card