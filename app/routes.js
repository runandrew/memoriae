// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import { settings } from './utils/userSettings';

function appOnEnter () {
  console.log('inside onEnter');
  console.log(settings.getSync('dbPath'));
}

export default (
  <Route path="/" component={ App } onEnter={ appOnEnter }>
    <IndexRoute component={ HomePage } />
  </Route>
);
