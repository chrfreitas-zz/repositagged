import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Table from '../index';

describe('Table view', () => {
  it('should match with snapshot', () => {
    const header = ['Repository', 'Description', 'Language', 'Tags', ''];

    const repositories = [
      {
        id: 1,
        name: 'kubernetes',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
        language: 'go',
        tag: '',
      },
      {
        id: 2,
        name: 'django',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
        language: 'python',
        tag: '',
      },
      {
        id: 3,
        name: 'jest',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nihil.s',
        language: 'javascript',
        tag: '',
      },
    ];

    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Table header={header} body={repositories} />
    );
    expect(result).toMatchSnapshot();
  });
});
