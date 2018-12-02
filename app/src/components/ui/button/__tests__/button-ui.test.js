import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../index';

describe('Button view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Button>Save</Button>);
    expect(result).toMatchSnapshot();
  });
});
