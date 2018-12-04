import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from '../index';

describe('Modal view', () => {
  it('should match the snapshot with component default', () => {
    const props = {
      title: 'Modal',
      confirm: () => {},
      cancel: () => {},
    };

    const Children = () => 'Hello!';

    const renderer = new ShallowRenderer();
    const result = renderer.render(<Modal {...props}><Children /></Modal>);
    expect(result).toMatchSnapshot();
  });
});
