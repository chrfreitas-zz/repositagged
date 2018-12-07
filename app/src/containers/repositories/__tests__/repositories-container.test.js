import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import actions from '../../../actions/repositories';
import RepositoriesContainer from '..';


describe('Respositories Container', () => {
  const mockStore = configureStore();
  const store = mockStore({
    repositories: [],
  });

  it('should have property repositories', () => {
    const wrapper = shallow(<RepositoriesContainer store={store} />);
    expect(wrapper.props()).toHaveProperty('repositories', []);
  });

  it('should have a functiona named getRepositories', () => {
    const wrapper = shallow(<RepositoriesContainer store={store} />);
    expect(typeof wrapper.props().getRepositories === 'function').toBeTruthy();
  });

  it('should have dispatched getRepositories', () => {
    const username = 'scorsese';
    const spy = jest.spyOn(actions, 'fetchRepositoriesList');

    const wrapper = shallow(<RepositoriesContainer store={store} />);
    wrapper.props().getRepositories(username);

    expect(spy).toHaveBeenCalledWith(username);
  });

  it('should have a function named search', () => {
    const wrapper = shallow(<RepositoriesContainer store={store} />);
    expect(typeof wrapper.props().search === 'function').toBeTruthy();
  });

  it('should have dispatched getRepositories with param query', () => {
    const query = 'documentation';
    const spy = jest.spyOn(actions, 'search');

    const wrapper = shallow(<RepositoriesContainer store={store} />);
    wrapper.props().search(query);

    expect(spy).toHaveBeenCalledWith(query);
  });
});
