// @flow
// Required libraries
import React, { Component } from 'react';
import { Link } from 'react-router';

// Required files
import TagList from './TagList.js';

export default class PageListItem extends Component {
  render () {
    let divStyle = {
      backgroundColor: this.props.active ? '#d6e5ff' : 'inherit'
    };

    return (
      <div className="list-group-item" style={ divStyle } onClick={ () => this.props.handleClick(this.props.page.get('id')) }>
        <h5 className="noselect">{ this.props.page.get('title') }</h5>

        <div>
          <TagList tags={ this.props.page.get('tags') } />
        </div>
      </div>
    );
  }
}
