import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Repositories from '../index';

describe('Repositories View', () => {
  const props = {
    repositories: [],
    match: {
      params: {
        username: 'xyz',
      },
    },
    getRepositories: jest.fn(),
  };

  it('should match with snapshot', () => {
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
