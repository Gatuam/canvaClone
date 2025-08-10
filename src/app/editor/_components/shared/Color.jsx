import React from 'react'
import { ChromePicker, CirclePicker } from 'react-color'

const Color = ({value, onColorChange}) => {
  return (
    <div className='space-y-4'>
      <ChromePicker
      color={value}
      onChange={(e)=>onColorChange(e.hex)}
      />

      <CirclePicker 
      color={value}
      onChange={(e)=>onColorChange(e.hex)}
      />
    </div>
  )
}

export default Color
