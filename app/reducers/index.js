// @flow
// Required libraries
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Required files
import pages from './pages';

const rootReducer = combineReducers({
  routing,
  pages
});

export default rootReducer;
