import actionTypes from './types';

export const loginAC = (name, email) => ({
  type: actionTypes.LOGIN,
  payload: {
    name, email
  }
});

export const logOutAC = () => ({
  type: actionTypes.LOGOUT
});
