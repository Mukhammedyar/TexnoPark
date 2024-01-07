import React from 'react'
import cardImage from '../../assets/bg.png'
import './Card.css'


export default function Card({name, muddet, src}) {
  return (
    <div className='h-[350px] bg-white border border-gray-500 rounded-3xl card'>
        <img src={src} alt="" className='rounded-t-3xl h-[60%] w-full object-cover border-b-2'/>
        <div className='p-3'>
        <p className='text-md my-2 md:m-0 lg:m-0 md:text-lg lg:text-2xl h-[40%]'>{name}</p>
        <p className='text-xs md:text-sm text-gray-700'><strong>Muddet:</strong>{muddet}</p>
            <p className='text-xs md:text-sm text-gray-700'><strong>Mentor:</strong>Jamshid Saparov</p>
            <p className='text-xs md:text-sm text-gray-700'><strong>Kurs turi:</strong>Offline</p>
        </div>
    </div>
  )
}
