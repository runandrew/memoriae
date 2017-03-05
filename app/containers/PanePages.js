// @flow
// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Required files
import Page from '../components/Page';

/* -----------------    COMPONENT     ------------------ */

class PanePages extends Component {
  render () {
    return (
      <div className="pane pane-side">
        { this.props.pages.map((page, i) => (<Page page={ page } key={ i }/>)) }
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  pages: state.pages
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(PanePages);
