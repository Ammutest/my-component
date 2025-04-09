import React from 'react'
import {
  Button,
  InputText,
  InputNumber,
  InputEmail,
  InputPassword,
  InputDropdown,
  InputRadio,
  InputCheckbox,
  Navbar,
  InputFile,
  Card,
  InputDate,
  InputPhone,
  InputTextarea,
  InputTime
} from 'my-component'

import 'my-component/dist/index.css'

const App = () => {
  return (
    <>
      <InputText />
      <InputNumber />
      <InputEmail />
      <InputPassword />
      <InputDropdown />
      <InputRadio />
      <InputCheckbox />
      <InputFile />
      <InputDate />
      <InputPhone />
      <InputTextarea/>
      <InputTime />
      <Button />
    </>
  )
}

export default App
