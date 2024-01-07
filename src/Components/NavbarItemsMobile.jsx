import React, { useContext } from 'react'
import ListItem from '../UI/ListItem/ListItem'
import NavbarButton from '../UI/ListItem/NavbarButton/NavbarButton'
import { DarkModeContext } from '../Context/DarkModeContext'
import { Link } from 'react-router-dom'

export default function NavbarItemsMobile({ menyu, setDropdownMenyu, dropdownMenyu }) {
    const {isDark} = useContext(DarkModeContext)
  return (
    <div className={`md:hidden menyu-item flex-col text-center  ${isDark ? "bg-gray-900 text-white" : "bg-white"} ${menyu ? "flex": "hidden"}`}>
            <ListItem className={` px-4 p-1 ${isDark ? 'hover:bg-gray-800' : "nav-item"} `}>Uy</ListItem>
            <ListItem className={` px-4 p-1 ${isDark ? 'hover:bg-gray-800' : "nav-item"} `}>Biz Haqqimizda</ListItem>
                <ListItem className={` px-4 p-1 ${isDark ? 'hover:bg-gray-800' : "nav-item"} `} onClick={()=> setDropdownMenyu(!dropdownMenyu)}>Qosimsha
                    <i className='bx bx-chevron-down'></i>
                </ListItem>
                <div className={`bg-white w-full mt-[.35rem] ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-white"} py-2 border text-center flex-col top-16 ${dropdownMenyu? "flex" : "hidden"}`}>
                    <ListItem className={`${isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"} px-4 p-1`}>Baylanis</ListItem>
                    <ListItem className={`${isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"} px-4 p-1`}>Konsultatsiya</ListItem>
                    <ListItem className={`${isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"} px-4 p-1`}>Sotsial Tarmaqlar</ListItem>
                </div>
            <ListItem className={` px-4 p-1 ${isDark ? 'hover:bg-gray-800' : "nav-item"} `}>Kurslar</ListItem>
            <NavbarButton className={"text-center flex justify-center"}>
                <Link to={'/login'}>
                    Registration
                    <i className='bx bxs-chevron-right' ></i>
                </Link>
            </NavbarButton>
        </div>
  )
}
