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

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ homeOnEnter }) => (
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
  homeOnEnter: () => {
    if (!checkDbPath()) hashHistory.push('/newUser'); // If there isn't an existing database, then go to new user page
    else dispatch(fetchPages()); // If there is a database, then fetch the data
  }
});

export default connect(mapProps, mapDispatch)(Routes);
