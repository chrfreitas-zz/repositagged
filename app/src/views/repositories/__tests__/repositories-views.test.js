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
      url: '/test',
      params: {
        username: 'xyz',
      },
    },
    sync: () => {},
    search: () => {},
  };


  it('should match view with table', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should match view with loading', () => {
    props.repositories = null;
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  describe('when it did mount', () => {
    it('should call sync once', () => {
      const spy = jest.spyOn(props, 'sync');
      shallow(<Repositories {...props} />);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('when it makes a search', () => {
    it('should call search with param elm', () => {
      const evt = {
        target: {
          value: 'elm',
        },
      };

      const wrapper = shallow(<Repositories {...props} />);
      const spy = jest.spyOn(wrapper.instance(), 'search');
      wrapper.instance().onChangeInput(evt);

      expect(spy).toHaveBeenCalledWith(evt.target.value);
    });
  });
});
