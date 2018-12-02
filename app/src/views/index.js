import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';

const Views = () => (
  <Switch>
    <Route path="/home" component={Home} />
  </Switch>
);

export default Views;
