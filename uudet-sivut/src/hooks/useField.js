import { useState } from 'react'

// Osasta 7 tuttu custom hook. Palauttaa suoraan input-elementille
// sopivat propsit sekä erillisen reset-funktion.
export const useField = (type = 'text') => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    inputProps: { type, value, onChange },
    value,
    reset,
  }
}
