// @flow
// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Required files

/* -----------------    COMPONENT     ------------------ */

class PanePage extends Component {
  render () {
    return (
      <div className="pane">
        <h4>This is the main Pane</h4>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  pages: state.pages
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(PanePage);
