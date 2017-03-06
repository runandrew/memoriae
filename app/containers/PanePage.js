// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Required files
import TagList from '../components/TagList';

/* -----------------    COMPONENT     ------------------ */

class PanePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      page: {
        title: props.page.title,
        text: 'Text'
      }
    };
  }

  onPageUpdate (pageUpdateObj) {
    const { page } = this.state;

    this.setState({
      page: Object.assign(page, pageUpdateObj)
    });
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      page: newProps.page.toJS()
    });
  }

  render () {
    return (
      <div className="pane">
        <input
          value={ this.state.page.title }
          onChange={ evt => this.onPageUpdate({ title: evt.target.value })}
        />
        <h3>{ this.props.page.get('title') }</h3>
        <TagList tags={ this.props.page.get('tags') } />
        <p>{ this.props.page.get('text') }</p>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
  page: state.pages.get('selectedPage')
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(PanePage);
