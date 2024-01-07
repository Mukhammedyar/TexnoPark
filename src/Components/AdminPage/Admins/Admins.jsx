import React from 'react'
import EditButton from '../../../UI/EditButton/EditButton'
import ModalPage from '../../../UI/Modal/Modal'
import Input from '../../../UI/Input/Input'
import { DataGrid } from '@mui/x-data-grid'

export default function Admins({ handleOpen, handleClose, open }) {

  return (
      <div className=' border border-gray-700 p-2 md:p-5 rounded-lg row-span-1 col-span-1 col-start-1 row-start-3 md:col-span-1 md:col-start-1 md:col-end-3'>
          <table className=' table w-full'>
              <thead>
                  <th className='w-[5%] border-gray-700 border'>id</th>
                  <th className='w-[5%] border-gray-700 border'>Name</th>
                  <th className='w-[5%] border-gray-700 border'>Last Name</th>
                  <th className='w-[5%] border-gray-700 border'>login</th>
                  <th className='w-[5%] border-gray-700 border'>password</th>
                  <th className='w-[7%] border-gray-700 border'>role</th>
              
                <tr className=' bg-gray-700'>
                  <td className='border-gray-600 border px-2 py-1'>id</td>
                  <td className='border-gray-600 border px-2 py-1'>Lorem</td>
                  <td className='border-gray-600 border px-2 py-1'>Ispum</td>
                  <td className='border-gray-600 border px-2 py-1'>admin1</td>
                  <td className='border-gray-600 border px-2 py-1'>admin1</td>
                  <td className='border-gray-600 border px-2 py-1 flex items-center gap-3 justify-between'>
                    2admin <EditButton 
                    className={"text-sm p-0 h-[30px]"}
                    onClick={handleOpen}>
                      Edit</EditButton>
                  </td>
                </tr>
              </thead>
              <EditButton 
                onClick={handleOpen} 
                className={"my-2"}
              >Add</EditButton>
              <ModalPage handleClose={handleClose} open={open} >
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"Last Name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"login"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"password"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"role"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <EditButton 
                className={"w-[100%] justify-center text-white"} 
                onClick={handleClose}>
                  Add
                </EditButton>
            </ModalPage>
              <ModalPage handleClose={handleClose} open={open} >
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"Last Name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"login"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"password"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"role"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <EditButton 
                className={"w-[100%] justify-center text-white"} 
                onClick={handleClose}>
                  Edit
                </EditButton>
            </ModalPage>
          </table>  
      </div>
  )
}

    