import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Home from './home';

const Views = () => (
  <Main>
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  </Main>
);

export default Views;
