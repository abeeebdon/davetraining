import React, { useState } from 'react'

const Appp = () => {
  const [value, setValue] = useState('')
  const handleInputChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="App">
      <h2>Dave Gray First Project on React</h2>
      <div style={{ backgroundColor: value }} className="box">
        <p>{value}</p>
      </div>
      <input
        type="text"
        placeholder="Add color name"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  )
}
export default Appp
