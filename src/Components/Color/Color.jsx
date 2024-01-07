import React, { useState } from 'react'

export default function Color() {
  const [color, setColor] = useState([
    { color: "#166534", title: 'green' },
    { color: "#001747", title: 'blue' },
  ])
  const [selectedColor, setSelectedColor] = useState('')
  const [inputColor, setInPutColor] = useState('')
  
  const getInputColor = (e) => {
    console.log(e)
    setInPutColor(e.target.value)
  }

  return (
      <div className='w-full h-[200px] my-5 px-10'>
          <p className='text-3xl font-bold' style={{color: selectedColor || inputColor}}>Color</p>
          <input type="color" onChange={getInputColor}/>
            <ul id="presetColors" className='w-[200px]h-[200px] flex'>
                {color.map(color => 
                  <option 
                  value={color.color} 
                  className={`w-[40px] border h-[40px] m-2`} 
                  style={{background:color.color}} 
                  onClick={() => setSelectedColor(color.color)}
                  />
                )}
            </ul>
      </div>
  )
}
