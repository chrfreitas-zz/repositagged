import React from 'react';
import configureStore from 'redux-mock-store';
import actions from '../../../actions/repository';
import { shallow } from 'enzyme';
import RepositoryContainer from '..';


describe('Respository Container', () => {
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
        username: 'edgarwright',
      },
    },
  };

  it('should have property repositories', () => {
    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    expect(wrapper.props()).toHaveProperty('repository', { id: 1 });
  });

  it('should have property username', () => {
    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    expect(wrapper.props()).toHaveProperty('username');
  });

  it('should have a function setTags', () => {
    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    expect(typeof wrapper.props().setTags === 'function').toBeTruthy();
  });

  it('should have dispatched setTags with param repository', () => {
    const repository = 'redux';
    const spy = jest.spyOn(actions, 'setTags');

    const wrapper = shallow(<RepositoryContainer store={store} {...props} />);
    wrapper.props().setTags(repository);

    expect(spy).toHaveBeenCalledWith(repository);
  });
});
