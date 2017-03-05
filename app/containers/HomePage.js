// @flow
// Required libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Required files
import Home from '../components/Home';
import PanePages from './PanePages';
import { dbConnect } from '../utils/database';

/* -----------------    COMPONENT     ------------------ */

const HomePage = ({ pages }) => (
  <div>
    <div className="pane-group">
      <PanePages />
    </div>
  </div>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  pages: state.pages
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(HomePage);
