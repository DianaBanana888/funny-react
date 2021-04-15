import actionTypes from './types';

export const loginAC = (id, name, email, arrayNote) => ({
  type: actionTypes.LOGIN,
  payload: {
    id, name, email, arrayNote
  }
});

export const logOutAC = () => ({
  type: actionTypes.LOGOUT
});
