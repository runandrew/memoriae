// @flow
// Required libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Required files
import Home from '../components/Home';
import { dbConnect } from '../utils/database';

function grabPosts () {
  const db = dbConnect();

  console.log(db.get('pages').value());
}
/* -----------------    COMPONENT     ------------------ */

class HomePage extends Component {
  render () {
    return (
      <div>
        <Home />
        <button onClick={ grabPosts }>
          Get data
        </button>
      </div>

    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(HomePage);
