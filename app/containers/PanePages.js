// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import immutable from 'immutable';

// Required files
import PageListItem from '../components/PageListItem';
import { setPageId } from '../reducers/pages';

/* -----------------    COMPONENT     ------------------ */

class PanePages extends Component {
  render () {
    return (
      <div className="pane pane-side">
        <div className="list-group">
          { this.props.pages.map((page, i) => (
            <PageListItem
              page={ page }
              key={ i }
              handleClick={ this.props.handleClick }
              active={ page.get('id') === this.props.page.get('id') }
            />
          ))}
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({
  pages: state.pages.get('allPages'),
  page: state.pages.get('allPages')
  .find(page => {
    return page.get('id') === state.pages.get('pageId');
  }) || immutable.Map({})
});
const mapDispatch = dispatch => ({
  handleClick: (id) => {
    dispatch(setPageId(id));
  }
});

export default connect(mapProps, mapDispatch)(PanePages);
