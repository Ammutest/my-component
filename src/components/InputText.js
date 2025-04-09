import React from 'react'
import { useState } from 'react'

const InputText = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function validateName(name) {
    if (!name) {
      return 'Name cannot be empty.'
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return 'Name can only contain letters and spaces.'
    }
    if (name.length < 3) {
      return 'Name must be at least 3 characters long.'
    }
    return ''
  }

  function handleChange(e) {
    const value = e.target.value
    setName(value)
    const validationError = validateName(value)
    setError(validationError)
  }
  return (
    <div>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' value={name} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default InputText
