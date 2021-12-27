/* eslint-disable import/no-named-as-default */
import React from 'react';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => (
  {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
);

export default renderWithRedux;
