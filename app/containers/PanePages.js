// @flow
// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Required files
import PageListItem from '../components/PageListItem';

/* -----------------    COMPONENT     ------------------ */

class PanePages extends Component {
  render () {
    return (
      <div className="pane pane-side">
        <div className="list-group">
          { this.props.pages.map((page, i) => (<PageListItem page={ page } key={ i }/>)) }
        </div>
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
