import React, { useContext } from 'react'
import './innoX.css'
import innoX from '../../assets/Background.png'
import { DarkModeContext } from '../../Context/DarkModeContext'
import { Grow, useScrollTrigger } from '@mui/material'


export default function InnoX() {
  const { isDark } = useContext(DarkModeContext) 
  const trigger = useScrollTrigger()



  return (
    <div data-aos={`${trigger? "fade-up": "fade-up"}`}
        className='grid gap-2 md:gap-5 px-[5%] md:px-[7%] my-10 list-bar'>
        <div className={`grid p-5 gap-5 ${isDark ? 'border-gray-700' : '' } border-2 rounded-lg hover:bg-[rgba(0,30,60,.025)] transition-all transition-2`}>
            <div className={`grid row-start-1 col-start-1 self-start ${isDark? 'text-gray-200' :'text-gray-900'}`}>
                <p className={`text-2xl md:text-4xl lg:text-5xl font-bold ${isDark? 'text-white' : 'text-blue-950 border-b-2 border-b-blue-950 w-3/4 hover:text-green-900 hover:border-b-green-900 transition-all transition-2'}`}>InnoX 1-basqish</p>
                <p className="text-md md:text-lg py-2">lorem ispum dolor sit</p>
                  <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat qui magni autem repellat voluptas blanditiis, iure commodi cum? Aliquid.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae laborum inventore incidunt obcaecati quo esse laudantium quos ullam repudiandae?
                  </p>
            </div>
            <div div className="grid row-start-1 col-start-2 overflow-hidden">
              <img
                src="https://avatars.mds.yandex.net/i?id=b1b17994931945ba19729d3546a04c1b90578ecf_l-10603993-images-thumbs&n=13"
                className=' object-cover w-full h-full hover:scale-[105%] transition-all transition-2'
                alt="" />
            </div>
        </div>  
        
    </div>
  )
}


// md1 row - start - 1 col - start - 1
// md2: row-start-1 col-start-2