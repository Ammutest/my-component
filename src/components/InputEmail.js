import React from 'react'
import { useState } from 'react'

const InputEmail = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  function validateEmail(email) {
    if (!email) {
      return 'Email cannot be empty.'
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address.'
    }
    return ''
  }

  function handleChange(e) {
    const value = e.target.value
    setEmail(value)
    const validationError = validateEmail(value)
    setError(validationError)
  }
  return (
    <div>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={handleChange}
        placeholder='Enter your email'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default InputEmail
