import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalTags from '../../components/modal-tags';

class Repository extends Component {
  static propTypes = {
    repository: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
  }

  edit = (tags) => {
    const { update, repository } = this.props;

    update({
      ...repository,
      tags,
    });
  }

  render() {
    const { repository } = this.props;

    return (
      <ModalTags
        isOpen
        repository={repository}
        save={this.edit}
        close={() => {}}
      />
    );
  }
}

export default Repository;
