import React, { useState } from 'react'
import { Fragment } from 'react'

const InputPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  function validatePhoneNumber(value) {
    if (!value) {
      return ''
    }

    const phoneNumberPattern =
      /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,3}[-.\s]?[0-9]{3,5}[-.\s]?[0-9]{4,6}$/

    if (!phoneNumberPattern.test(value)) {
      return 'Please enter a valid phone number.'
    }

    return ''
  }

  function handleChange(e) {
    const value = e.target.value
    setPhoneNumber(value)
    const validationError = validatePhoneNumber(value)

    if (validationError) {
      setError(validationError)
    } else {
      setError('')
    }
  }

  return (
    <Fragment>
      <label htmlFor='phoneNumber'>Phone Number</label>
      <input
        id='phoneNumber'
        type='text'
        value={phoneNumber}
        onChange={handleChange}
        placeholder='Enter your phone number'
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Fragment>
  )
}

export default InputPhone
