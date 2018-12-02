import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Progressbar = ({ text }) => (
  <div className="progressbar">
    <div className="progressbar__icon" />
    {text && <div className="progressbar__text">{text}</div>}
  </div>
);

Progressbar.propTypes = {
  text: PropTypes.string,
};

Progressbar.defaultProps = {
  text: '',
};

export default Progressbar;
