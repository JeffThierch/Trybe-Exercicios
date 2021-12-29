// src/TrafficSignal.jsx

import React, {useContext} from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import ApplicationContext from './context/ApplicationContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  const {signal: {color}, handleChangeSignalColor} = useContext(ApplicationContext)
  return (
        <div>
          <div className="button-container">
            <button onClick={() => handleChangeSignalColor('red')} type="button">
              Red
            </button>
            <button onClick={() => handleChangeSignalColor('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => handleChangeSignalColor('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(color)} alt="" />
        </div>
  );
};

export default TrafficSignal
