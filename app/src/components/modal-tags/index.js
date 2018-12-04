import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Input from '../ui/input';
import Button from '../ui/button';
import './index.scss';

class ModalTags extends Component {
  state = {
    tags: [],
  }

  static propTypes = {
    save: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    repository: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: false,
  }

  onChangeInput = (evt) => {
    const { value } = evt.target;
    this.setState({ tags: value });
  }

  save = () => {
    const { repository } = this.props;
    const { tags } = this.state;

    this.props.save({
      ...repository,
      tags,
    });
  }

  render() {
    const { tags } = this.state;
    const {
      isOpen, repository, close,
    } = this.props;

    return (
      <Modal className="modal" isOpen={isOpen}>
        <h5 className="modal__title">
          {`edit tags for ${repository.name}`}
        </h5>
        <Input
          placeholder="Create new tags"
          value={tags}
          className="input input--full"
          onChange={this.onChangeInput}
          autoFocus
        />
        <div className="modal__row">
          <Button onClick={this.save}>Save</Button>
          <Button onClick={close}>Cancel</Button>
        </div>
      </Modal>
    );
  }
}

export default ModalTags;
