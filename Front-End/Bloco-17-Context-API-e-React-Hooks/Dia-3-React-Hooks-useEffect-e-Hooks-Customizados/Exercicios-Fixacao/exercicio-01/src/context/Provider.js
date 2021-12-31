import AplicationContext from "./AplicationContext";
import React, {useState} from 'react';

function Provider({children}) {
  const [randomNumber, setNumber] = useState(Math.ceil(Math.random() * 100));
  const [timer, setTimer] = useState(10);
  const [isCorrect, setCorrect] = useState(false);
  const [timerMessage, setMessageTimer] = useState(4);
  
  const handleNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    setNumber(number)
  }

  const handleTimer = () => {
    setTimer(timer => timer - 1)
    if (timer === 0) {
      resetTimer()
      handleNumber()
    }
  }

  const resetTimer = () => {
    setTimer(10)
  }

  const handleMessageTimer = () => {
    setMessageTimer(timerMessage => timerMessage - 1)
    if(timerMessage === 0) {
      resetMessageTimer()
      setCorrect(false)
    }
  }

  const resetMessageTimer = () => {
    setMessageTimer(4)
  }


  const CONTEXT_VALUE = {
    randomNumber,
    timer,
    handleTimer,
    isCorrect,
    setCorrect,
    handleMessageTimer, 
  }
  return (
    <AplicationContext.Provider value={CONTEXT_VALUE}>
      {children}
    </AplicationContext.Provider>
  )
}

export default Provider