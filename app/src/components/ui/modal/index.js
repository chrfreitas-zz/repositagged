import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Button from '../button';
import './index.scss';

const ModalUI = ({
  title, isOpen, confirm, cancel, children,
}) => (
  <Modal className="modal" isOpen={isOpen}>
    <h5 className="modal__title">
      {title}
    </h5>
    { children }
    <div className="modal__row">
      {confirm && <Button onClick={confirm}>Save</Button>}
      {cancel && <Button onClick={cancel}>Cancel</Button>}
    </div>
  </Modal>
);

ModalUI.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

ModalUI.defaultProps = {
  isOpen: false,
};

export default ModalUI;
