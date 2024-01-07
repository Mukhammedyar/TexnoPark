import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkModeContext'

export default function ListItem({ children, className, onClick }) {
  const isDark= useContext(DarkModeContext)
  return (
      <div className={`my-1 cursor-pointer ${isDark ? 'border-none' : 'border-b-white border-b-[1.5px] hover:text-gray-800'}   font-bold transition-all transition-2 ${className}`} onClick={onClick}>
          {children}
    </div>
  )
}
