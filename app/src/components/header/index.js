import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import './index.scss';

const Header = ({ title }) => (
  <div className="header">
    <div className="header__title">
      {title}
    </div>
    <div className="header__menu">
      <Route path="/:username/repositories" component={Menu} />
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
