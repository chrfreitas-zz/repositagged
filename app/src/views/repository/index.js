import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalTags from '../../components/modal-tags';

class Repository extends Component {
  static propTypes = {
    repository: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
  }

  edit = (tags) => {
    const { update, repository } = this.props;

    update({
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
        save={this.edit}
        username={username}
      />
    );
  }
}

export default Repository;
