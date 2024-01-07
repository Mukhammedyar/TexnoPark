import React from 'react'
import EditButton from '../../../UI/EditButton/EditButton'
import startapper from '../../../assets/Abilay.jpg'
import ModalPage from '../../../UI/Modal/Modal'
import Input from '../../../UI/Input/Input'

export default function Startapper({handleClose, handleOpen, open}) {
  return (
    <div className="bas-ayna border border-gray-700 p-2 md:p-5 rounded-lg row-span-1 col-span-2 col-start-1 row-start-2 md:col-start-2 md:row-start-1 md:col-span-1">
        <p>Mentorlar</p>
        <div className="flex gap-3 flex-col">
            <p className="text-md bg-gray-700 rounded px-2 py-2 flex items-center justify-between gap-4">
            <img src={startapper} alt="" className='w-[50px] h-[50px] object-cover rounded-full'/>Lorem, ipsum dolor.
            <EditButton
              className={"w-[150px] justify-center "}
              onClick={handleOpen}
            >
              Edit
            </EditButton>
            </p>
            
            <ModalPage handleClose={handleClose} open={open} >
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"description"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input 
                  type="file" 
                  accept="image/png, image/jpeg"
                  className={"text-white border-0 bg-gray-800"}
                />
                <EditButton className={"w-[100%] justify-center text-white"} onClick={handleClose}>
                  Edit
                </EditButton>
            </ModalPage>
            <EditButton 
              onClick={handleOpen}
              className={"justify-center"}
              >
              Add
            </EditButton>
            <ModalPage handleClose={handleClose} open={open}>
                <p className='text-white'>Add new list Item</p>
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"description"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input 
                  type="file" 
                  accept="image/png, image/jpeg"
                  className={"text-white border-0 bg-gray-800"}
                />
                <EditButton className={"w-[100%] justify-center text-white"} onClick={handleClose}>
                  Add
                </EditButton>
            </ModalPage>
        </div>
      </div> 
  )
}
