import React, { useState } from 'react'
import { Fragment } from 'react'

const InputRadio = () => {
  const [selectedGender, setSelectedGender] = useState('')
  const [error, setError] = useState('')

  const handleRadioChange = (event) => {
    const value = event.target.value
    setSelectedGender(value)

    if (value === '') {
      setError('Please select a gender.')
    } else {
      setError('')
      alert('You selected: ' + value)
    }
  }

  return (
    <Fragment>
      <div>
        <div>
          <label>radio</label>
          <input
            type='radio'
            id='male'
            name='gender'
            value='Male'
            onChange={handleRadioChange}
            checked={selectedGender === 'Male'}
          />
          <label>Male</label>
          <input
            type='radio'
            id='female'
            name='gender'
            value='Female'
            onChange={handleRadioChange}
            checked={selectedGender === 'Female'}
          />
          <label>Female</label>
          <input
            type='radio'
            id='other'
            name='gender'
            value='Other'
            onChange={handleRadioChange}
            checked={selectedGender === 'Other'}
          />
          <label>Other</label>
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </Fragment>
  )
}

export default InputRadio
