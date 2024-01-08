import React from 'react'
import Input from '../../UI/Input/Input'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-gray-900'>
       <form action="" className='flex gap-3 flex-col w-1/3 border border-gray-700 rounded-lg p-3 md:p-4 lg:p-5 min-w-[300px]'>
            <p className="text-md md:text-lg lg:text-2xl py-1 text-center text-white ">
                Login
            </p>
            <Input
                placeholder={"login"}
                className={"bg-gray-800 border-gray-700 w-full min-w-[250px] text-white p-0"}
            />
            <Input
                placeholder={"parol"}
                className={"bg-gray-800 border-gray-700 w-full min-w-[250px] text-white p-0"}
            />
            <Button  variant='contained' sx={{fontSize: "10px"}}>
                <Link to={'/admin'}> 
                  Login
                </Link>
            </Button>
       </form>
    </div>
  )
}
