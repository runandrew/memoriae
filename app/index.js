import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import Routes from './Routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
