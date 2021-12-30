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

  const handleCorrect = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
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


  const CONTEXT_VALUE = {randomNumber, handleNumber, timer, handleTimer, resetTimer, isCorrect, handleCorrect, handleMessageTimer, timerMessage}
  return (
    <AplicationContext.Provider value={CONTEXT_VALUE}>
      {children}
    </AplicationContext.Provider>
  )
}

export default Provider