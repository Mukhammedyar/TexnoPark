import React from 'react'
import EditButton from '../../../UI/EditButton/EditButton'
import ModalPage from '../../../UI/Modal/Modal'
import Input from '../../../UI/Input/Input'
import innoX from "../../../assets/Background.png"

export default function InnoX({handleClose, handleOpen , open}) {
  return (
    <div className="bas-ayna border border-gray-700 p-2 md:p-5 rounded-lg row-span-1 col-span-2 col-start-1 row-start-2 md:col-span-1 md:col-start-1">
        <p>Inno X Section</p>
        <div className="flex gap-3">
          <div className='flex flex-col gap-3 basis-[50%]'>
            <p className="text-md bg-gray-700 rounded px-2 py-2 flex items-center justify-between gap-4">
            Lorem, ipsum dolor.
            </p>
            <p className="text-md bg-gray-700 rounded px-2 py-2 flex items-center justify-between gap-4">
            Lorem, ipsum dolor.
            </p>
            <p className="text-md bg-gray-700 rounded px-2 py-2 flex items-center justify-between gap-4">
            Lorem, ipsum dolor.
            </p>
            <EditButton
              className={"w-[150px] justify-center "}
              onClick={handleOpen}>
                Edit
              </EditButton>
            <ModalPage handleClose={handleClose} open={open} >
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input placeholder={"name"} className={"bg-gray-800 border-gray-700 text-white"}/> 
                <Input 
                  type="file" 
                  accept="image/png, image/jpeg"
                  className={"text-white border-0 bg-gray-800"}
                />
                <EditButton 
                className={"w-[100%] justify-center text-white"} 
                onClick={handleClose}>
                  Edit
                </EditButton>
            </ModalPage>
          </div>
          <div className='basis-[50%] p-5 relative'>
            <img src={innoX} alt=""  className='w-full h-full object-cover rounded-lg '/>
          </div>
        </div>
      </div> 
  )
}
