import ApplicationContext from './ApplicationContext'
import React, {useState} from 'react'

function Provider ({children}) {
  const [cars, changeCarPosition] = useState({red: false, blue: false, yellow: false})

  const [signal, changeSignalColor] = useState({color: 'red'})

  const handleChangeCarPosition = ({target: {name}}) => (
    changeCarPosition((prevState) => (
      {
        ...prevState,
        [name]: !prevState[name]
      }
    ))
  )

  const handleChangeSignalColor = (signalColor) => {
    changeSignalColor((prevState) => (
      {
        ...prevState,
        color: signalColor
      }
    ))
  }

  const CONTEXT_VALUE = {
    cars,
    signal,
    handleChangeCarPosition,
    handleChangeSignalColor
  }
  return (
    <ApplicationContext.Provider value={CONTEXT_VALUE}>
      {children}
    </ApplicationContext.Provider>  
  )
}

export default Provider;