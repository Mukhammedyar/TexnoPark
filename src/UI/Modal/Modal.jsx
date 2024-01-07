import React from 'react'
import Input from '../Input/Input'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function ModalPage({children, open, handleClose}) {

  return (
    <Modal
    keepMounted
    sx={{display: "flex", justifyContent: "center", height: "100vh" , alignItems: "center", backdropFilter: "brightness(150%)" }}
    open={open}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <Box sx={{width: 400 , height: 300 , background: "#1F2937", padding: "20px 10px", display: "flex" , alignItems: "center" , gap: 1, flexDirection: "column"}}>
      {children}
    </Box>
  </Modal>
  )
}
