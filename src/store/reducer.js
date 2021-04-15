import actionTypes from './types';

const initialState = {
  isAuthorized: false,
  userName: '',
  userEmail: '',
};

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuthorized: true,
        userName: action.payload.name,
        userEmail: action.payload.email,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthorized: false,
        userName: '',
        userEmail: '',
      };

    default:
      return state;
  }
};
