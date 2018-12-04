import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTags from '../index';

describe('ModalTags component', () => {
  it('should match with snapshot', () => {
    const repository = {
      id: 1,
      name: 'mongodb',
    };

    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <ModalTags
        isOpen
        save={() => {}}
        close={() => {}}
        repository={repository}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, veniam.
      </ModalTags>,
    );
    expect(result).toMatchSnapshot();
  });
});
