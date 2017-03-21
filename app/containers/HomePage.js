// @flow
// Required libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Required files
import PanePages from './PanePages';
import PanePage from './PanePage';
import PaneBlank from '../components/PaneBlank';
import { dbConnect } from '../utils/database';

/* -----------------    COMPONENT     ------------------ */

const HomePage = ({ pages }) => (
  <div>
    <div className="pane-group">
      <PanePages />
      { pages.get('allPages').size ? <PanePage /> : <PaneBlank /> }
    </div>
  </div>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  pages: state.pages
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(HomePage);
