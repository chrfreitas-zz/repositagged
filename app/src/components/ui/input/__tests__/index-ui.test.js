import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Input from '../index';

describe('Input view', () => {
  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Input placeholder="Digite aqui seu nome" />
    );
    expect(result).toMatchSnapshot();
  });
});
