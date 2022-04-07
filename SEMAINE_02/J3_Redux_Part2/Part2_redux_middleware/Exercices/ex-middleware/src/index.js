import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from './reducers/index';
import middlewareCount from './middlewares/count';

import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux'; 

// création du store => prêt pour l'App
const store = createStore(reducer, applyMiddleware(middlewareCount));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
