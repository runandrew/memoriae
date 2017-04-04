// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import immutable from 'immutable';

// Required files
import TagList from '../components/TagList';

/* -----------------    COMPONENT     ------------------ */

class PanePage extends Component {
  constructor (props) {
    super(props);

    console.log('this is the page in constructor', props.page);
    this.state = {
      page: {
        title: props.page.get('title'),
        text: props.page.get('text'),
        id: props.page.get('id'),
        tags: props.page.get('tags').toJS()
      }
    };
  }

  onPageUpdate (pageUpdateObj) {
    const { page } = this.state;
    const finalPage = Object.assign(page, pageUpdateObj); // Heads up: only shallow copy

    this.setState({
      page: finalPage
    });

    this.props.updatePage(finalPage);
  }

  componentWillReceiveProps (newProps) {
    console.log('willReceiveProps', newProps);
    this.setState({
      page: newProps.page.toJS()
    });
  }

  render () {
    return (
      <div className="pane pane-padding">
        <input
          type="text"
          value={ this.state.page.title }
          onChange={ evt => this.onPageUpdate({ title: evt.target.value })}
          contentEditable={ true }
          className="page-input page-input-title"
        />
        <TagList tags={ this.props.page.get('tags') } />
        <input
          type="text"
          value={ this.props.page.get('text') }
          onChange={ evt => this.onPageUpdate({ text: evt.target.value }) }
          contentEditable={ true }
          className="page-input page-input-text"
        />
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

// Required files
import { editPage } from '../reducers/pages';

const mapProps = (state) => ({
  page: state.pages.get('allPages')
  .find(page => {
    return page.get('id') === state.pages.get('pageId');
  }) || immutable.Map({})
});
const mapDispatch = dispatch => ({
  updatePage: (page) => {
    dispatch(editPage(page));
  }
});

export default connect(mapProps, mapDispatch)(PanePage);
