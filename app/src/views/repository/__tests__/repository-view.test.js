import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Repository from '../index';

describe('Repository View', () => {
  const props = {
    repository: {
      id: 1,
    },
    username: 'damienchazelle',
    setTags: () => {},
  };

  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repository {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should setTags the repository object', () => {
    props.setTags = jest.fn();
    const wrapper = shallow(<Repository {...props} />);

    wrapper.instance().setTags('eml');
    expect(props.setTags).toHaveBeenCalledWith({ id: 1, tags: 'eml' });
  });
});
