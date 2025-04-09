import React from 'react'
import { useState } from 'react'

const InputNumber = () => {
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  function validateNumber(value) {
    if (!value) {
      return ''
    }

    if (isNaN(value)) {
      return 'Please enter a valid number.'
    }
    return ''
  }
  function handleChange(e) {
    const value = e.target.value
    setNumber(value)

    const validationError = validateNumber(value)

    if (validationError) {
      setError(validationError)
    } else {
      setError('')
    }
  }
  return (
    <div>
      <label htmlFor='number'>Number</label>
      <input id='number' type='text' value={number} onChange={handleChange} />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default InputNumber
