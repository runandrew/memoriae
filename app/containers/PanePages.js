// @flow
// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Required files
import PageListItem from '../components/PageListItem';
import { fetchPage } from '../reducers/pages';

/* -----------------    COMPONENT     ------------------ */

class PanePages extends Component {
  render () {
    return (
      <div className="pane pane-side">
        <div className="list-group">
          { this.props.pages.map((page, i) => (
            <PageListItem page={ page } key={ i } handleClick={ this.props.handleClick }/>
          )) }
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({
  pages: state.pages.get('allPages')
});
const mapDispatch = dispatch => ({
  handleClick: (id) => dispatch(fetchPage(id))
});

export default connect(mapProps, mapDispatch)(PanePages);
