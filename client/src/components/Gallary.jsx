import React from 'react'
import gimg from '../assets/g.jpeg'
const Gallary = () => {
  return (
    <div className='w-3/5 h-full'>
        <div className="p-5">
            <h1 className='text-3xl'>Gallary</h1>
        </div>
        <div className="p-5">

      <img src={gimg} alt="" className=' sm:w-2/3'/>
        </div>
    </div>
  )
}

export default Gallary
