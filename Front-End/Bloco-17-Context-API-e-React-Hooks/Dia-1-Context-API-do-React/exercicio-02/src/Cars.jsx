// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

export default function Cars() {
  return (
    <MyContext.Consumer>
      {
      ({cars: {red, blue, yellow}, changeCarPosition}) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={changeCarPosition}
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
             onClick={changeCarPosition}
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
              onClick={changeCarPosition}
              name="yellow"
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )
      }
    </MyContext.Consumer>
  );
}
