// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Page extends Component {
  render () {
    return (
      <div>
        <h1>{ this.props.page.title } - hi</h1>
        <p>{ this.props.page.text }</p>
      </div>
    );
  }
}
