import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import citiesReducer from './reducers/cities-reducer';
import activeCityReducer from './reducers/active-city-reducer';

import './assets/stylesheets/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
