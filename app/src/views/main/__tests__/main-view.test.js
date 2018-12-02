import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from '../index';

describe('Main view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Main>Seja bem vindo!</Main>);
    expect(result).toMatchSnapshot();
  });
});
