// @flow
// Required libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Required files
import Home from '../components/Home';
import Page from '../components/Page';
import { dbConnect } from '../utils/database';

/* -----------------    COMPONENT     ------------------ */

const HomePage = ({ pages }) => (
  <div>
    { pages.map((page, i) => (<Page page={ page } key={ i }/>)) }
  </div>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  pages: state.pages
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(HomePage);
