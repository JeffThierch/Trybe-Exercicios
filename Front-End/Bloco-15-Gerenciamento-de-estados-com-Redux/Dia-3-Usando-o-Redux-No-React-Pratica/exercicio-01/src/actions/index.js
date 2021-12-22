export const AUTH_USER = 'AUTH_USER';
export const REG_CUSTOMER = 'REG_CUSTOMER';

export const authUser = () => ({
  type: AUTH_USER,
  isAuthenticated: true
});

export const regCustomer = (name, age, email, id) => ({
  type: REG_CUSTOMER,
  userInfos: {name, age, email, id}
});