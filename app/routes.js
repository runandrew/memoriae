// @flow
// Required libraries
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Required files
import App from './containers/App';
import HomePage from './containers/HomePage';
import { setDbPath, checkDbPath } from './utils/userSettings';

function appOnEnter () {
  // Make sure that a db path is set
  if (!checkDbPath()) setDbPath();
}

export default (
  <Route path="/" component={ App } onEnter={ appOnEnter }>
    <IndexRoute component={ HomePage } />
  </Route>
);
