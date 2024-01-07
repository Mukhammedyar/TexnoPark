import React, { useContext, useEffect, useState } from 'react'
import Mentorlar from '../Mentorlar/Mentorlar'
import InnoX from '../InnoX/InnoX'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Uy from '../Uy/Uy'
import Navbar from '../Navbar/Navbar'
import { DarkModeContext } from '../../Context/DarkModeContext'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainPage() {
    const [position, setPostion] = useState({ x: 0, y: 0 })
    
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 1  ) * 10
        const y = (e.clientY / window.innerHeight - 1) * 10
        
      setPostion({ x , y})
    }

  const { isDark } = useContext(DarkModeContext)
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={`${isDark ? 'bg-gray-800' : "bg-white"}`}>
        <Navbar/>
        <div
            className='uy-bg' 
            onMouseMove={handleMouseMove}
            style={{
            backgroundPosition: `${position.x}% ${position.y}%`,
            }}>
        <Uy/>
        </div>
        <Mentorlar />
        <InnoX/>
        <Contact />
        <Footer/>  
    </div>
  )
}
