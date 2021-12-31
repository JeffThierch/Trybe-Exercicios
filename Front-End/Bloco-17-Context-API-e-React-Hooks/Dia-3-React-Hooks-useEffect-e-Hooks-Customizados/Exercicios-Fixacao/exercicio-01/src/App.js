import React, {useContext, useEffect} from "react";
import AplicationContext from "./context/AplicationContext";

function App() {
  const {
      randomNumber,
      timer,
      handleTimer,
      isCorrect,
      setCorrect,
      handleMessageTimer, 
    } = useContext(AplicationContext)


    useEffect(() => {

      const numberInterval =  setInterval(() => {
        handleTimer()
      }, 1000)

      return () => {
        clearInterval(numberInterval)
      }

    }, [handleTimer]);

    useEffect(() => {

      const handleCorrect = (number) => {
        if (number % 3 === 0 && number % 5 === 0) {
          setCorrect(true)
        } else {
          setCorrect(false)
        }
      }

      handleCorrect(randomNumber)

    }, [randomNumber, setCorrect])

    useEffect(() => {

      if(isCorrect) {
        const intervalMessage = setInterval(() => {
          handleMessageTimer()
        }, 1000)

        return () => {
          clearInterval(intervalMessage)
        }

      }

    })


  return (
    <div className="App">
      <h1>{randomNumber}</h1>
      <h1>{timer}</h1>
      <h1>{isCorrect && 'Correto'}</h1>
    </div>
  );
}

export default App;
