import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

describe('Header view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Header title="Sejá bem vindo" />);
    expect(result).toMatchSnapshot();
  });
});
