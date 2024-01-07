import { useState } from 'react'
import './App.css'
import 'boxicons'
import { DarkModeContext } from './Context/DarkModeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import Login from './Components/Login/Login'
import AdminPage from './Components/AdminPage/AdminPage'


function App() {
  const [isDark, setIsDark] = useState(false)

  

  return (
    <DarkModeContext.Provider value={{isDark, setIsDark}}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
          </Routes>
      </BrowserRouter>
    </DarkModeContext.Provider>
  )
}

export default App
