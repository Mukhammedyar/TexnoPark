import React, { useState } from 'react'
import BasAyna from './BasAyna/basAyna'
import EditButton from '../../UI/EditButton/EditButton';
import Input from '../../UI/Input/Input';
import ModalPage from '../../UI/Modal/Modal';
import Startapper from './Startapper/Startapper';
import InnoX from './InnoXSection/InnoX';
import Admins from './Admins/Admins';

export default function AdminPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
  setOpen(false);
  };
  
  
  return (
    <div className='bg-gray-800 min-h-[100vh] text-white grid items-center content-center gap-3 p-5 md:p-10 lg:p-20 md:grid-cols-2 grid-cols-1 grid-rows-2'>
      <BasAyna 
        handleOpen={handleOpen} 
        handleClose={handleClose} 
        open={open} />
      <Startapper
        handleOpen={handleOpen} 
        handleClose={handleClose} 
        open={open}
      />
      <InnoX
         handleOpen={handleOpen} 
         handleClose={handleClose} 
         open={open}
      />
      <Admins
        handleOpen={handleOpen} 
        handleClose={handleClose} 
        open={open}
      />
      <br/>
    </div>
  )
}
