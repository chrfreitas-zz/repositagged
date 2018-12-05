import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import RepositoryContainer from '..';


describe('Respositories Container', () => {
  const mockStore = configureStore();
  const store = mockStore({
    repositories: [
      {
        id: 1,
      },
    ],
  });
  const props = {
    match: {
      params: {
        id: 1,
      },
    },
  };

  it('should have property repositories', () => {
    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    expect(wrapper.props()).toHaveProperty('repository', { id: 1 });
  });

  it('should have a dispatch getRepositories', () => {
    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    expect(typeof wrapper.props().update === 'function').toBeTruthy();
  });
});
