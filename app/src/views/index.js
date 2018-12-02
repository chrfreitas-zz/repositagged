import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Home from './home';
import Repositories from './repositories';

const Views = () => (
  <Main>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/:user/repositories" component={Repositories} />
    </Switch>
  </Main>
);

export default Views;
