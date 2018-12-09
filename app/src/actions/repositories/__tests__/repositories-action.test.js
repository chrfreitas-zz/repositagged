import actions from '..';

describe('Repositories Actions', () => {
  it('should call return data and SYNC', () => {
    const result = actions.sync('username');
    const actionExpected = {
      type: actions.SYNC,
      data: 'username',
    };

    expect(result).toEqual(actionExpected);
  });

  it('should call return data and SYNC_SUCCESS', () => {
    const result = actions.syncSuccess([]);
    const actionExpected = {
      type: actions.SYNC_SUCCESS,
      data: [],
    };

    expect(result).toEqual(actionExpected);
  });
});
