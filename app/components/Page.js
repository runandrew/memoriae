// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Page extends Component {
  render () {
    return (
      <div>
        <h5>{ this.props.page.title }</h5>
      </div>
    );
  }
}
