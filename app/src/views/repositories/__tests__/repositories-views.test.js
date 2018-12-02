import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Repositories from '../index';

describe('Repositories view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories />);
    expect(result).toMatchSnapshot();
  });
});
