// Requried libraries
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import immutable from 'immutable';
import Textarea from 'react-textarea-autosize';

// Required files
import TagList from '../components/TagList';

/* -----------------    COMPONENT     ------------------ */

class PanePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      page: props.page
    };
  }

  onPageUpdate (pageUpdateObj) {
    const { page } = this.state;
    const finalPage = page.merge(pageUpdateObj);

    this.setState({
      page: finalPage
    });

    this.props.updatePage(finalPage);
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      page: newProps.page
    });
  }

  render () {
    return (
      <div className="pane pane-padding">
        <input
          type="text"
          value={ this.state.page.get('title') }
          onChange={ evt => this.onPageUpdate({ title: evt.target.value })}
          contentEditable={ true }
          className="page-input page-input-title"
        />
        <TagList tags={ this.props.page.get('tags') } />
        <Textarea
          value={ this.props.page.get('text') }
          onChange={ evt => this.onPageUpdate({ text: evt.target.value }) }
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
