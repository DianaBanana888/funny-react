import actionTypes from './types';

const initialState = {
  isAuth: false,
  userName: '',
  userEmail: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.name,
        userEmail: action.payload.email,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userName: '',
        userEmail: ''
      };

    default:
      return state;
  }
};
