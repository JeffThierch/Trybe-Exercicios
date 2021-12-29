import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 */
  const removeItemFromList = (indexPresentInList, itemType) => {
    setOrderList((prevState) => (
      {
        ...prevState,
        [itemType]: prevState[itemType]
          .filter((_, index) => (index !== indexPresentInList)),
      }
    ));
  };

  /* Passo 9 */
  const updateValueItemInList = (newItem, orderState) => {
    setOrderList((prevState) => (
      {
        ...prevState,
        [newItem.itemType]: orderState
          .map((item) => {
            if (item.id === newItem.id) { return newItem; }
            return item;
          }),
      }
    ));
  };

  /* Passo 7 */
  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(indexPresentInList, newItem.itemType);
    }
    updateValueItemInList(newItem, orderState);
  };

  /* Passo 6 */
  const addItemToList = (newItem) => {
    setOrderList((prevState) => (
      {
        ...prevState,
        [newItem.itemType]: [...prevState[newItem.itemType], newItem],
      }
    ));
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* Passo 4 */
    const isPresentInList = orderList[itemType].some(({ id }) => id === itemName);

    /* Passo 5 */
    if (!isPresentInList) {
      return addItemToList(newItem);
    }
    manageItemsInList(newItem);
  };

  const PROVIDER_VALUE = {
    handleChange,
    orderList,
    updateCart,
    showCart,
  };

  return (
    <MyContext.Provider value={ PROVIDER_VALUE }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
