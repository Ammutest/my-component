import React, { useState } from 'react'
import { Fragment } from 'react'

const InputDropdown = () => {
  const [arr, setArr] = useState([
    'Kerala',
    'TamilNadu',
    'Karnataka',
    'AndhraPradesh'
  ])
  const [selectedItem, setSelectedItem] = useState('')
  const [error, setError] = useState('')

  const handleDropdownChange = (event) => {
    const value = event.target.value
    setSelectedItem(value)

    if (value === '') {
      setError('Please select an option.')
    } else {
      setError('')
      alert('You selected: ' + value)
    }
  }

  return (
    <Fragment>
      <div>
        <label>Dropdown</label>
        <select value={selectedItem} onChange={handleDropdownChange}>
          <option value=''>------------SELECT------------</option>
          {arr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Fragment>
  )
}

export default InputDropdown
