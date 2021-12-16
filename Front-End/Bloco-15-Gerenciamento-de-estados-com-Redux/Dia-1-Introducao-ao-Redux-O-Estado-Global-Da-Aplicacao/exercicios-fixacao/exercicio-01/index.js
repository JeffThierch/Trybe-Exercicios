const Redux = require('redux');

const changeLoginState = (email) => ({
  type: 'LOGIN',
  email
})

const initialState = {
  login: false,
  email: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return {
        ...state,
        login: !state.login,
        email: action.email
      };
      default:
        return state
  }
}

const store = Redux.createStore(reducer);

store.dispatch(changeLoginState('jefferson@hotmail.com'));

console.log(store.getState());