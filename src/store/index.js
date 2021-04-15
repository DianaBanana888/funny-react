import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = () => {
  const startState = {
    isAuthorized: false,
    userName: '',
  };
  return localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : startState;
};

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  reducer, initialState(),
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
