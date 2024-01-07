import React, { useContext } from 'react'
import ListItem from '../UI/ListItem/ListItem'
import NavbarButton from '../UI/ListItem/NavbarButton/NavbarButton'
import { DarkModeContext } from '../Context/DarkModeContext'
import { Link } from 'react-router-dom'

export default function NavbarItems() {
    const {isDark} = useContext(DarkModeContext)
  return (
    <div className='h-full hidden xl:flex lg:flex gap-3 md:flex sm:hidden items-center text-center'>
        
        <ListItem className={` ${isDark ? '' : "nav-item"} `}>Uy</ListItem>
        <ListItem className={` ${isDark ? '' : "nav-item"} `}>Startapperler</ListItem>
        <ListItem className={` ${isDark ? '' : "nav-item"} `}>
            InnoX
        </ListItem>
        <div className='my-1 qosimsha relative h-full flex items-center justify-center'>     
            <ListItem className={` ${isDark ? '' : "nav-item"} `}>
                <span className='w-full h-full'>Qosimsha</span>
                <i className='bx bx-chevron-down'></i>
            </ListItem>
            <div className={`dropdown dropdown-qosimsha hidden transition-all ${ isDark ? "bg-gray-900 text-white" : "bg-white border"}  w-[150px] mt-[.35rem] py-2  flex-col text-left absolute top-16`}>
                <ListItem className={`${isDark ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-200"} px-4 p-1`}>Baylanis</ListItem>
                <ListItem className={`${isDark ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-200"} px-4 p-1`}>Konsultatsiya</ListItem>
                <ListItem className={`${isDark ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-200"} px-4 p-1`}>Sotsial Tarmaqlar</ListItem>
            </div>
        </div>  
        <NavbarButton>
            <Link to={'/Login'}>
                Registration
                <i className='bx bxs-chevron-right' ></i>
            </Link>
        </NavbarButton>
    </div>
  )
}
