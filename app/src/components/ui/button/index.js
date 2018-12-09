import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ children, onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
