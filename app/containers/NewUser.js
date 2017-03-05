// @flow
import React, { Component } from 'react';
import { setDbPath } from '../utils/userSettings';
import { hashHistory } from 'react-router';

export default class NewUser extends Component {
  render () {
    return (
      <div>
        <h1>Memoriae</h1>
        <h3>Get started: </h3>
          <button onClick={ () => {
            setDbPath();
            hashHistory.push('/');
          }
          }>
          Set path
        </button>
      </div>
    );
  }
}
