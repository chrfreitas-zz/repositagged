import React from 'react';
import { Route } from 'react-router-dom';
import Main from './main';
import Home from './home';
import RepositoriesContainer from '../containers/repositories';
import RepositoryContainer from '../containers/repository';

const Views = () => (
  <Main>
    <Route path="/home" component={Home} />
    <Route path="/:username/repositories" component={RepositoriesContainer} />
    <Route exact path="/:username/repositories/:id/update" component={RepositoryContainer} />
  </Main>
);

export default Views;
