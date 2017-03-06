// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageListItem extends Component {
  render () {
    return (
      <div className="list-group-item" onClick={ () => alert(this.props.page.title)}>
        <h5>{ this.props.page.title }</h5>

        <div>
          { this.props.page.tags.map((tag, i) => (
            <span className="tag-group-item" key={ i }>{ tag }</span>
          ))}
        </div>
      </div>
    );
  }
}
