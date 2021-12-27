import {render} from '@testing-library/react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import rootReducer from '../../redux/rootReducer'


const renderWithRedux = (
  component, 
  {initialState, store = createStore(rootReducer, initialState)} = {}
) => (
  {...render(<Provider store={store}>{component}</Provider>), store}
)

export default renderWithRedux