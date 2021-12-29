import React, {useState} from 'react'
import CarsContext from './carsContext'

function Provider({children}) {
  const state = { red: false, blue: false, yellow: false, }

  const [cars, changeCarPosition] = useState(state)

  const handleChangeCarPosition = ({target: {name}}) => {
    changeCarPosition((prevState) => (
      {
        ...prevState,
        [name]: !prevState[name]
      }
    ))
  }

  const CONTEXT_VALUE = {
    cars,
    handleChangeCarPosition
  }
  return (
    <CarsContext.Provider value={CONTEXT_VALUE}>
      {children}
    </CarsContext.Provider>
  )
}

export default Provider