import React, { useState } from 'react'
import { Fragment } from 'react'

const InputTextarea = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function validateText(text) {
    if (!text) {
      return 'Text cannot be empty.'
    }
    if (text.length < 10) {
      return 'Text must be at least 10 characters long.'
    }
    if (!/[a-zA-Z0-9]/.test(text)) {
      return 'Text must contain at least one alphanumeric character.'
    }
    return ''
  }

  function handleChange(e) {
    const value = e.target.value
    setText(value)
    const validationError = validateText(value)
    setError(validationError)
  }

  return (
    <Fragment>
      <label htmlFor='text'>Address</label>
      <textarea
        id='text'
        value={text}
        onChange={handleChange}
        placeholder='Enter your text'
        rows='4'
        cols='50'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Fragment>
  )
}

export default InputTextarea
