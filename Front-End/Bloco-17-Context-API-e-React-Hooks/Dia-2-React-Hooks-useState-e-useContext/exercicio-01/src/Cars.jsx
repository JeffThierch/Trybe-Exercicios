// src/Cars.jsx

import React, {useContext} from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarsContext from './context/carsContext';

export default function Cars() {
  const {cars:{ red, blue, yellow}, handleChangeCarPosition} = useContext(CarsContext);
  return (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              name='red'
              onClick={handleChangeCarPosition}
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
              name='blue'
              onClick={handleChangeCarPosition}
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
              name='yellow'
              onClick={handleChangeCarPosition}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
  );
}

