import React from 'react'
import { useState } from 'react'
function Button() {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    if (isClicked) {
      alert('Clicked.')
    } else {
      alert('Button clicked!')
    }
  }
  return (
    <div>
      <label>Button</label>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  )
}

export default Button
