import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';

import './index.scss';

const Main = ({ children }) => (
  <div className="main">
    <div className="main__header">
      <Header title="githubstars" />
    </div>
    <div className="main__content">{children}</div>
  </div>
);

Main.propTypes = {
  children: PropTypes.any,
};

Main.defaultProps = {
  children: () => 'No results',
};

export default Main;
