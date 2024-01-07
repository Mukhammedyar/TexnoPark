import React from 'react'
import texno from '../../assets/texno.jpg'
export default function About() {
  return (
    <div className='grid gap-5 w-[100%] min-h-[300px] mt-5 p-5 place-items-center'>
          <div className='grid row-start-2 col-start-1 md:row-start-1 md:col-start-2 md:w-[100%] content-center bg-white min-h-[100px] row-end-2 text-blue-950 item-left'>
              <div className='h-full flex justify-center md:gap-3 gap-1 flex-col'>
                <p className="text-3xl text-center md:text-start font-bold text-green-800 ">Lorem ipsum dolor sit amet.</p>
                <p className="text-md text-center md:text-start font-mono p-0 m-0">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="text-md text-center md:text-start text-gray-600 p-0 m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, est consequuntur in rem quibusdam deleniti consectetur laborum ea voluptatum at!</p>
              </div>  
          </div>
      <div className="grid row-start-1 col-start-1 md:row-start-1 md:col-start-1 w-[100%] item-right place-items-center">
        <div className="h-full md:w-[400px] flex items-center justify-center transition-all transition-2 overflow-hidden rounded-3xl">
            <img src={texno} alt="" className='object-cover w-full h-full rounded-3xl md:hover:scale-125 md:hover:rotate-3 transition-2 transition-all '/>
        </div>
      </div>
    </div>
  )
}
