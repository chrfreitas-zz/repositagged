import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../ui/modal';
import Input from '../ui/input';

class ModalTags extends Component {
  state = {
    tags: [],
  }

  static propTypes = {
    save: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    repository: PropTypes.object.isRequired,
  }

  onChangeInput = (evt) => {
    const { value } = evt.target;
    this.setState({ tags: value });
  }

  hasRepository = () => Object.keys(this.props.repository).length !== 0;

  render() {
    const { tags } = this.state;
    const { repository, save, close } = this.props;

    return (
      <Modal
        title={`edit tags for ${repository.name}`}
        isOpen={this.hasRepository(repository)}
        confirm={() => save(tags)}
        cancel={close}
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
