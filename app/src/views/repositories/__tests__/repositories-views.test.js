import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Repositories from '../index';

describe('Repositories View', () => {
  const props = {
    repositories: [{
      name: 'mongodb',
    }],
    match: {
      params: {
        username: 'xyz',
      },
    },
    getRepositories: jest.fn(),
  };

  it('should match view with table', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should match view with loading', () => {
    props.repositories = [];
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  describe('when it did mount', () => {
    it('should call getRepositories once', () => {
      shallow(<Repositories {...props} />);
      expect(props.getRepositories).toHaveBeenCalledTimes(1);
    });
  });
});
