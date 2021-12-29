// src/Cars.jsx
import React, {useContext} from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import ApplicationContext from './context/ApplicationContext';

export default function Cars() {
  const {cars: {red, blue, yellow }, handleChangeCarPosition} = useContext(ApplicationContext)
  return (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={handleChangeCarPosition}
              name="red"
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
             onClick={handleChangeCarPosition}
              name="blue"
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={handleChangeCarPosition}
              name="yellow"
              type="button"
            >
              Move
            </button>
          </div>
        </div>
  );
}
