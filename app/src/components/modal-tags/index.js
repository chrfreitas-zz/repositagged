import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Modal from '../ui/modal';
import Input from '../ui/input';

const hasRepository = repository => Object.keys(repository).length !== 0;

class ModalTags extends Component {
  state = {
    tags: [],
    closed: false,
  }

  static propTypes = {
    save: PropTypes.func.isRequired,
    repository: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
  }

  onChangeInput = (evt) => {
    const { value } = evt.target;
    this.setState({ tags: value });
  }

  onConfirm = () => {
    const { tags } = this.state;
    const { save } = this.props;

    save(tags);

    this.closeModal();
  }

  closeModal = () => {
    this.setState({ closed: true });
  }

  render() {
    const { tags, closed } = this.state;
    const { repository, username } = this.props;

    if (closed) {
      return <Redirect to={`/${username}/repositories`} />;
    }

    return (
      <Modal
        title={`edit tags for ${repository.name}`}
        isOpen={hasRepository(repository)}
        confirm={this.onConfirm}
        cancel={this.closeModal}
      >
        <Input
          placeholder="Create new tags"
          value={tags}
          className="input input--full"
          onChange={this.onChangeInput}
          autoFocus
        />
      </Modal>
    );
  }
}

export default ModalTags;
