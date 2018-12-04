import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import './index.scss';

const Main = ({ children }) => (
  <div className="main">
    <Header title="githubstars" />
    <div className="main__content">{children}</div>
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

Main.defaultProps = {
  children: () => 'No results',
};

export default Main;
