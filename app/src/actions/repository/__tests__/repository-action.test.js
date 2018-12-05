import actions from '..';

describe('Repository Action', () => {
  it('should call return data and UPDATE', () => {
    const result = actions.update(1, 'python');
    const actionExpected = {
      type: actions.UPDATE,
      data: { id: 1, tags: 'python' },
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and UPDATE_SUCCESS', () => {
    const result = actions.updateSuccess({});
    const actionExpected = {
      type: actions.UPDATE_SUCCESS,
      data: {},
    };

    expect(result).toEqual(actionExpected);
  });
});
