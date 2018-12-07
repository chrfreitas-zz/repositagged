import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTags from '../index';

describe('ModalTags component', () => {
  const props = {
    isOpen: true,
    username: 'jonfavreau',
    repository: {
      id: 1,
      name: 'mongodb',
    },
    save: jest.fn(),
  };

  it('should match with snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <ModalTags {...props} />,
    );

    expect(result).toMatchSnapshot();
  });

  it('should change value of tags state', () => {
    const wrapper = shallow(<ModalTags {...props} />);

    const evt = {
      target: {
        value: 'golang',
      },
    };

    wrapper.instance().onChangeInput(evt);
    expect(wrapper.state('tags')).toBe(evt.target.value);
  });

  it('should check if there is a repository', () => {
    const wrapper = shallow(<ModalTags {...props} />);

    expect(wrapper.instance().hasRepository(props.repository)).toBeTruthy();
  });

  it('should call save when confirm', () => {
    const wrapper = shallow(<ModalTags {...props} />);

    wrapper.instance().onConfirm();
    expect(props.save).toHaveBeenCalledTimes(1);
  });

  it('should call save with param erlang', () => {
    const wrapper = shallow(<ModalTags {...props} />);
    wrapper.setState({
      tags: 'erlang',
    });

    wrapper.instance().onConfirm();
    expect(props.save).toHaveBeenCalledWith('erlang');
  });

  it('should call close when confirm', () => {
    const wrapper = shallow(<ModalTags {...props} />);

    const spy = jest.spyOn(wrapper.instance(), 'closeModal');

    wrapper.instance().onConfirm();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
