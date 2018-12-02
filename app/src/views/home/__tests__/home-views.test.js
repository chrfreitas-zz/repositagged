import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../index';

describe('Home view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Home />);
    expect(result).toMatchSnapshot();
  });
});
