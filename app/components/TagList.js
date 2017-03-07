// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TagList extends Component {
  render () {
    return (
      <span>
        { this.props.tags && this.props.tags.map((tag, i) => (
          <span className="tag-group-item noselect" key={ i }>{ tag }</span>
        ))}
      </span>
    );
  }
}
