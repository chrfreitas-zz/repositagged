import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Progressbar from '../index';

describe('Progressbar view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Progressbar />);
    expect(result).toMatchSnapshot();
  });
});
