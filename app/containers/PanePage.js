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
        <h3>{ this.props.page.get('title') }</h3>
        <p>{ this.props.page.get('text') }</p>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  page: state.pages.get('selectedPage')
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(PanePage);
