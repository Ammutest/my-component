import React from 'react'
import { useState } from 'react'

const InputPassword = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function validatePassword(password) {
    if (!password) {
      return 'Password cannot be empty.'
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.'
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.'
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.'
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.'
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Password must contain at least one special character.'
    }
    return ''
  }

  function handleChange(e) {
    const value = e.target.value
    setPassword(value)
    const validationError = validatePassword(value)
    setError(validationError)
  }

  return (
    <div>
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        value={password}
        onChange={handleChange}
        placeholder='Enter your password'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default InputPassword
