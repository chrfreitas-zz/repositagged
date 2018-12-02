import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ children }) => (
  <button type="button" className="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
