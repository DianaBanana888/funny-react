import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = () => {
  const initialState = {
    isAuth: false,
    userName: ''
  };
  return localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : initialState;
};

export const store = createStore(
  reducer, initialState()
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
