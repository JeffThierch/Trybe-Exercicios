import React, {useContext, useEffect} from "react";
import AplicationContext from "./context/AplicationContext";

function App() {
  const {
      randomNumber,
      timer,
      handleTimer,
      isCorrect,
      handleCorrect, 
      handleMessageTimer, 
    } = useContext(AplicationContext)


    useEffect(() => {
      const interval =  setInterval(() => {
        handleTimer()
      }, 1000)
      return () => {
        clearInterval(interval);}
    }, [handleTimer]);

    useEffect(() => {
        handleCorrect(randomNumber)
    }, [])

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
