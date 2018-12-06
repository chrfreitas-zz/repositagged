import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalTags from '../../components/modal-tags';

class Repository extends Component {
  static propTypes = {
    repository: PropTypes.object.isRequired,
    setTags: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
  }

  setTags = (tags) => {
    const { setTags, repository } = this.props;

    setTags({
      ...repository,
      tags,
    });
  }

  render() {
    const { repository, username } = this.props;

    return (
      <ModalTags
        isOpen
        repository={repository}
        save={this.setTags}
        username={username}
      />
    );
  }
}

export default Repository;
