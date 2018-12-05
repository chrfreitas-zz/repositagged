import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Menu from '../index';

describe('Menu view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Menu />);
    expect(result).toMatchSnapshot();
  });
});
