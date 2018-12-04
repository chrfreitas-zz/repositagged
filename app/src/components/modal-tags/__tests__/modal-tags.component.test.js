import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTags from '../index';

describe('ModalTags component', () => {
  const repository = {
    id: 1,
    name: 'mongodb',
  };

  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <ModalTags
        isOpen
        save={() => {}}
        close={() => {}}
        repository={repository}
      />,
    );

    expect(result).toMatchSnapshot();
  });

  it('shoudl change value of tags state', () => {
    const wrapper = shallow(<ModalTags
      isOpen
      save={() => {}}
      close={() => {}}
      repository={repository}
    />);

    const evt = {
      target: {
        value: 'golang',
      },
    };

    wrapper.instance().onChangeInput(evt);
    expect(wrapper.state('tags')).toBe(evt.target.value);
  });

  it('should check if there is a repository', () => {
    const wrapper = shallow(<ModalTags
      isOpen
      save={() => {}}
      close={() => {}}
      repository={repository}
    />);

    expect(wrapper.instance().hasRepository()).toBeTruthy();
  });
});
