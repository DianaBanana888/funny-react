import actionTypes from './types';

export const reducers = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuth: true,
        userName: action.payload.name,
        userEmail: action.payload.email,
        note: action.payload.arrayNote
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userName: '',
        note: []
      };

    default:
      return state;
  }
};
