import React, { useContext } from 'react'
import { DarkModeContext } from '../../Context/DarkModeContext'

export default function Input({ placeholder, onChange, className, value, type, accept }) {
    const {isDark} = useContext(DarkModeContext)
  return (
    <input 
      type={type}
      accept={accept}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`outline-none text-xs border px-3 rounded-lg h-[40px] md:h-[30px] lg:h-[40px] w-full ${isDark ? 'bg-gray-800 border-gray-700' : ''} ${className}`}
    />
  )
}
