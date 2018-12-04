import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Home from '../index';

describe('Home view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Home />);
    expect(result).toMatchSnapshot();
  });

  it('should change state username', () => {
    const evt = {
      target: { value: 'tarantino' },
    };

    const wrapper = shallow(<Home />);
    wrapper.instance().onChangeInput(evt);

    expect(wrapper.state('username')).toBe(evt.target.value);
  });
});
