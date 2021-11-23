import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContextProvider from './contexts/userContext';
import LendContextProvider from './contexts/lendContext';

ReactDOM.render(
  <UserContextProvider>
    <LendContextProvider>
    <App />
    </LendContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);


