import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Repository from '../index';

describe('Repository View', () => {
  const props = {
    repository: {
      id: 1,
    },
    update: () => {},
  };

  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repository {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should update the repository object', () => {
    props.update = jest.fn();
    const wrapper = shallow(<Repository {...props} />);

    wrapper.instance().edit('eml');
    expect(props.update).toHaveBeenCalledWith({ id: 1, tags: 'eml' });
  });
});
