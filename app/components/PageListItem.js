// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageListItem extends Component {
  render () {
    let divStyle = {
      backgroundColor: this.props.active ? '#b2cfff' : 'inherit'
    };

    return (
      <div className="list-group-item" style={ divStyle } onClick={ () => this.props.handleClick(this.props.page.get('id')) }>
        <h5>{ this.props.page.get('title') }</h5>

        <div>
          { this.props.page.get('tags').map((tag, i) => (
            <span className="tag-group-item" key={ i }>{ tag }</span>
          ))}
        </div>
      </div>
    );
  }
}
