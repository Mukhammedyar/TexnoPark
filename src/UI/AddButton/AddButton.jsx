import React from 'react'

export default function AddButton() {
  return (
    <button
      className={`bg-blue-600 p-2 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition-2 transition-all ${className}`}
      onClick={onClick} 
    >
      <EditIcon fontSize='small' />
      {children}
    </button>
  )
}
