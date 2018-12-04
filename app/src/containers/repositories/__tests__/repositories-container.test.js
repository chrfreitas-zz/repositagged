import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
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
});
