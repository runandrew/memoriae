// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h1>Homepage</h1>
        </div>
      </div>
    );
  }
}
