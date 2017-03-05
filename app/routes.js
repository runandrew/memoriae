// @flow
// Required libraries
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Required files
import App from './containers/App';
import HomePage from './containers/HomePage';
import NewUser from './containers/NewUser';
import { setDbPath, checkDbPath } from './utils/userSettings';
import { dbConnect } from './utils/database';
import { fetchPages } from './reducers/pages';

function homeOnEnter () {
  // Make sure that a db path is set
  if (!checkDbPath()) {
    console.log('inside history push');
    hashHistory.push('/newUser');
  } else {
    dbConnect();
  }
}

/* -----------------    COMPONENT     ------------------ */

const Routes = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } onEnter={ homeOnEnter }/>
      <Route path="/newUser" component={ NewUser } />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  user: state.user,
});

const mapDispatch = dispatch => ({
  fetchPages
});

export default connect(mapProps, mapDispatch)(Routes);
