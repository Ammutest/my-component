import React from 'react'

const InputFile = ({
  id,
  name,
  label,
  onChange,
  accept,
  multiple,
  required
}) => {
  return (
    <div className='input-file'>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type='file'
        id={id}
        name={name}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        required={required}
      />
    </div>
  )
}

export default InputFile
