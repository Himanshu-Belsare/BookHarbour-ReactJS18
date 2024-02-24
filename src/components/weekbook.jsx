import React from 'react'
import { Books } from '../data'
export const Weekbook = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 text-white p-8 shadow-md'>
    <div className="flex items-center justify-center mb-4">
        <img src={Books[7].book_cover} alt="Book of the week" className='w-32 object-cover h-40 mb-4'/>
    </div>
    <div className='text-center'>
        <h1 className='font-bold'>Book Of The Week</h1>
        <p className='text-lg'>{Books[7].title}</p>
        <p className='italic'>"Morgan Maxwell"</p>
    </div>
    </div>
    

    </>
  )
}
