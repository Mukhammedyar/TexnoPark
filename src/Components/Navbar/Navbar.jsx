import React, { useContext, useState } from 'react'
import 'boxicons'
import './Navbar.css'
import NavbarButton from '../../UI/ListItem/NavbarButton/NavbarButton'
import logo from '../../assets/1.png'
import logo2 from '../../assets/2.png'
import { DarkModeContext } from '../../Context/DarkModeContext'
import NavbarItems from '../NavbarItems'
import NavbarItemsMobile from '../NavbarItemsMobile'
import CustomizedSwitches from '../../UI/SwitchDarkMode/Switch'


export default function Navbar() {
    const [menyu, setMenyu] = useState(false)
    const [dropdownMenyu, setDropdownMenyu] = useState(false)
    const {isDark}= useContext(DarkModeContext)


  return (
      <>
        <div className={` ${isDark ? 'text-white bg-gray-900' : 'bg-white'} nav transition-all shadow-md h-[70px] flex justify-between items-center px-5 text-sm md:text-sm`}>
              <div className='logo font-extrabold text-orange-600 flex gap-5 items-center'>
                <img src={isDark ? logo2 : logo} className='object-cover h-[30px] md:h-[40px] transition-all transition-1' alt="" />
                <CustomizedSwitches/>
              </div>
              <NavbarItems />
            <NavbarButton className={"md:hidden sm:visible"}>
                <button onClick={()=> setMenyu(!menyu)}>Menyu</button>
            </NavbarButton>
        </div>
          <NavbarItemsMobile
            dropdownMenyu={dropdownMenyu}
            setDropdownMenyu={setDropdownMenyu}
            menyu={menyu}
          />
      </>
  )
}
