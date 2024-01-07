import React from 'react'
import img from '../../assets/texno.jpg'
import NavbarButton from '../../UI/ListItem/NavbarButton/NavbarButton'
import './uy.css'

export default function Uy() {
  return (
    <div className='uy-body backdrop-blur-sm backdrop-brightness-75 md:backdrop-blur-0 md:px-[7%] sm:px-[5%] px-[5%] py-5 text-white'>
      <div
        className='uy-elem z-10 grid md:grid-cols-2 uy p-3 gap-5 border-gray-200 border-[2px] rounded-3xl h-[550px] md:h-[450px] lg:h-[450px]'
      >
        <div className="grid row-start-2 col-start-1 md:row-start-1 md:col-start-1 lg:row-start-1 lg:col-start-1 place-items-center md:place-items-start lg:place-items-start place-content-center md:place-content-center left gap-3 px-3 h-[100%] md:h-full">
          <p className='text-sm font-mono text-gray-200'>
            Jaslar Texnoparki Start-Up orayi
          </p>
          <p className='text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-extrabold font-mono'>
            Sizde Start Up idea barma?
          </p>
          <p className='text-sm md:text-md lg:text-md text-center md:text-start lg:text-start text-gra-300'>
            Bizde Jaslar ushin ulken imkaniyatlar jaratilgan. Yagniy: IT tarawinda sapali ham arzan bilim aliw.IT tarawinda oz jolinizdi biz benen quring!
          </p>
          <NavbarButton className="text-sm md:text-md lg:text-lg w-[205px] md:w-[250px] rounded-3xl mt-2 md:mt-5 h-10 text-center transition-all">
            Ko'birek mag'luwmatlar
            <i className='bx bx-chevrons-right text-xl mt-1'></i>
          </NavbarButton> 
        </div>
        <div className="grid row-start-1 col-start-1 md:row-start-1 md:col-start-2 right items-center justify-center overflow-hidden md:h-full">
            <img 
            src={img} 
            alt="" 
            className='object-cover md:w-[100%] md:h-[70%] lg:h-full rounded-sm w-[100%] mx-auto'
          />
        </div>
    </div> 
    </div>
  )
}


// sm1: row - start - 2 col - start - 1
// sm2: row-start-1 col-start-1

// md1 row - start - 1 col - start - 1
// md2: row-start-1 col-start-2

// <div className='grid gap-3 w-[100%] h-[400px] bg-red-200 mt-5 p-5'>
//       <div className='grid row-start-2 col-start-1 md:row-start-1 md:col-start-1 min-w-[500px] min-h-[100px] row-end-2 bg-white item-left'>item left</div>
//       <div className="grid row-start-1 col-start-1 md:row-start-1 md:col-start-2 item-right bg-white overflow-hidden">
//         <img src={img} alt="" className='object-cover max-h-[300px]'/>
//       </div>
//     </div>

