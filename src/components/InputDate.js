import React, { useState, useEffect } from 'react'

const InputDate = () => {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div>
      <form>
        <label htmlFor='dob'>Date of Birth</label>
        <input type='date' id='dob' name='dob' required max={currentDate} />
      </form>
    </div>
  )
}

export default InputDate
