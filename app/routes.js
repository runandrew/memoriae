// @flow
// Required libraries
import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';

// Required files
import App from './containers/App';
import HomePage from './containers/HomePage';
import NewUser from './containers/NewUser';
import { setDbPath, checkDbPath } from './utils/userSettings';
import { dbConnect } from './utils/database';

function homeOnEnter () {
  // Make sure that a db path is set
  if (!checkDbPath()) {
    console.log('inside history push');
    hashHistory.push('/newUser');
  } else {
    dbConnect();
  }
}

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } onEnter={ homeOnEnter }/>
    <Route path="/newUser" component={ NewUser } />
  </Route>
);
